// thebookofyour.life — Cloudflare Worker
// Serves static HTML + handles API routes + D1 database

import HTML from '../index.html';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // CORS headers
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    // ── API ROUTES ──────────────────────────────────────

    // POST /api/gift — Sender creates a gift
    if (path === '/api/gift' && method === 'POST') {
      try {
        const body = await request.json();
        const { senderName, senderEmail, recipientName, personalNote } = body;
        if (!senderName || !recipientName) {
          return json({ error: 'senderName and recipientName required' }, 400, cors);
        }
        const id = generateId();
        await env.DB.prepare(
          `INSERT INTO gifts (id, sender_name, sender_email, recipient_name, personal_note) VALUES (?, ?, ?, ?, ?)`
        ).bind(id, senderName, senderEmail || '', recipientName, personalNote || '').run();
        return json({ id, senderName, recipientName }, 200, cors);
      } catch (e) {
        return json({ error: e.message }, 500, cors);
      }
    }

    // GET /api/gift/:id — Sender checks results
    if (path.startsWith('/api/gift/') && method === 'GET') {
      const id = path.replace('/api/gift/', '');
      try {
        const gift = await env.DB.prepare('SELECT * FROM gifts WHERE id = ?').bind(id).first();
        if (!gift) return json({ error: 'Gift not found' }, 404, cors);
        const result = await env.DB.prepare('SELECT * FROM results WHERE gift_id = ?').bind(id).first();
        return json({
          gift: {
            id: gift.id,
            senderName: gift.sender_name,
            recipientName: gift.recipient_name,
            personalNote: gift.personal_note,
            status: gift.status,
            createdAt: gift.created_at,
          },
          result: result ? {
            philosophyKey: result.philosophy_key,
            philosophyName: result.philosophy_name,
            runnerUp1: result.runner_up_1,
            runnerUp2: result.runner_up_2,
            bookTitle: result.book_title,
            bookAuthor: result.book_author,
            bookPrice: result.book_price,
            bookEmoji: result.book_emoji,
            amazonUrl: result.amazon_url,
            recipientName: result.recipient_name,
            recipientPhone: result.recipient_phone,
            recipientAddress: result.recipient_address,
          } : null
        }, 200, cors);
      } catch (e) {
        return json({ error: e.message }, 500, cors);
      }
    }

    // POST /api/result — Recipient submits quiz result + address
    if (path === '/api/result' && method === 'POST') {
      try {
        const body = await request.json();
        const {
          giftId, philosophyKey, philosophyName,
          runnerUp1, runnerUp2,
          bookTitle, bookAuthor, bookPrice, bookEmoji, amazonUrl,
          recipientName, recipientPhone, recipientAddress
        } = body;
        if (!giftId || !philosophyKey || !bookTitle || !recipientAddress) {
          return json({ error: 'Missing required fields' }, 400, cors);
        }
        const gift = await env.DB.prepare('SELECT id, status FROM gifts WHERE id = ?').bind(giftId).first();
        if (!gift) return json({ error: 'Gift not found' }, 404, cors);
        if (gift.status === 'completed') return json({ error: 'Already completed' }, 409, cors);

        await env.DB.prepare(
          `INSERT INTO results (gift_id, philosophy_key, philosophy_name, runner_up_1, runner_up_2,
            book_title, book_author, book_price, book_emoji, amazon_url,
            recipient_name, recipient_phone, recipient_address)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          giftId, philosophyKey, philosophyName,
          runnerUp1 || '', runnerUp2 || '',
          bookTitle, bookAuthor, bookPrice || 0, bookEmoji || '', amazonUrl,
          recipientName || '', recipientPhone || '', recipientAddress
        ).run();

        await env.DB.prepare(
          `UPDATE gifts SET status = 'completed', completed_at = datetime('now') WHERE id = ?`
        ).bind(giftId).run();

        return json({ success: true, giftId }, 200, cors);
      } catch (e) {
        return json({ error: e.message }, 500, cors);
      }
    }

    // POST /api/referral — Recipient submits referrals
    if (path === '/api/referral' && method === 'POST') {
      try {
        const body = await request.json();
        const { giftId, referrals } = body;
        if (!giftId || !referrals || !referrals.length) {
          return json({ error: 'giftId and referrals required' }, 400, cors);
        }
        const stmt = env.DB.prepare(
          'INSERT INTO referrals (source_gift_id, ref_name, ref_contact) VALUES (?, ?, ?)'
        );
        const batch = referrals
          .filter(r => r.name && r.contact)
          .slice(0, 3)
          .map(r => stmt.bind(giftId, r.name, r.contact));
        if (batch.length > 0) await env.DB.batch(batch);
        return json({ success: true, count: batch.length }, 200, cors);
      } catch (e) {
        return json({ error: e.message }, 500, cors);
      }
    }

    // ── SERVE STATIC HTML ───────────────────────────────
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  }
};

function generateId() {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  let id = '';
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders }
  });
}
