// POST /api/result — Recipient submits quiz result + address
// Marks gift as completed, stores philosophy + book + address

export async function onRequestPost(context) {
  const { request, env } = context;
  const cors = corsHeaders();

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

    // Verify gift exists
    const gift = await env.DB.prepare(
      'SELECT id, status FROM gifts WHERE id = ?'
    ).bind(giftId).first();

    if (!gift) {
      return json({ error: 'Gift not found' }, 404, cors);
    }

    if (gift.status === 'completed') {
      return json({ error: 'Quiz already completed for this gift' }, 409, cors);
    }

    // Save result
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

    // Mark gift as completed
    await env.DB.prepare(
      `UPDATE gifts SET status = 'completed', completed_at = datetime('now') WHERE id = ?`
    ).bind(giftId).run();

    // TODO: Send email to sender when Resend is set up
    // For now, sender polls GET /api/gift/:id

    return json({ success: true, giftId }, 200, cors);
  } catch (e) {
    return json({ error: e.message }, 500, cors);
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
