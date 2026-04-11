// GET /api/gift/:id — Sender checks if recipient completed the quiz
// Returns gift info + result (if completed)

export async function onRequestGet(context) {
  const { params, env, request } = context;
  const cors = corsHeaders();
  const id = params.id;

  try {
    // Get gift
    const gift = await env.DB.prepare(
      'SELECT * FROM gifts WHERE id = ?'
    ).bind(id).first();

    if (!gift) {
      return json({ error: 'Gift not found' }, 404, cors);
    }

    // Get result if completed
    const result = await env.DB.prepare(
      'SELECT * FROM results WHERE gift_id = ?'
    ).bind(id).first();

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
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
