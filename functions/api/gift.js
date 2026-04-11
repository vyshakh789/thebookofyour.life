// POST /api/gift — Sender creates a gift
// Returns { id, link }

export async function onRequestPost(context) {
  const { request, env } = context;
  const cors = corsHeaders(request);

  try {
    const body = await request.json();
    const { senderName, senderEmail, recipientName, personalNote } = body;

    if (!senderName || !recipientName) {
      return json({ error: 'senderName and recipientName required' }, 400, cors);
    }

    // Generate unique gift ID (8 chars, URL-safe)
    const id = generateId();

    await env.DB.prepare(
      `INSERT INTO gifts (id, sender_name, sender_email, recipient_name, personal_note)
       VALUES (?, ?, ?, ?, ?)`
    ).bind(id, senderName, senderEmail || '', recipientName, personalNote || '').run();

    return json({ id, senderName, recipientName }, 200, cors);
  } catch (e) {
    return json({ error: e.message }, 500, cors);
  }
}

// OPTIONS for CORS preflight
export async function onRequestOptions(context) {
  return new Response(null, { headers: corsHeaders(context.request) });
}

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

function corsHeaders(request) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
