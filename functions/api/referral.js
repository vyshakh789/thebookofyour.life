// POST /api/referral — Recipient submits up to 3 referrals

export async function onRequestPost(context) {
  const { request, env } = context;
  const cors = corsHeaders();

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

    if (batch.length > 0) {
      await env.DB.batch(batch);
    }

    return json({ success: true, count: batch.length }, 200, cors);
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
