/**
 * Cloudflare Worker scaffold to collect visitor records into a KV namespace.
 *
 * Bind a KV namespace named `VISITORS` in your wrangler.toml (or via dashboard).
 *
 * POST / -> append JSON visitor record (body JSON)
 * GET /  -> returns JSON array of stored visitors
 */

const MAX_RECORDS = 10000;

addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(req) {
  const url = new URL(req.url);
  if (req.method === 'POST') {
    try {
      const data = await req.json();
      const raw = await VISITORS.get('visitors');
      let arr = raw ? JSON.parse(raw) : [];
      arr.push({ ...data, receivedAt: new Date().toISOString() });
      if (arr.length > MAX_RECORDS) arr = arr.slice(arr.length - MAX_RECORDS);
      await VISITORS.put('visitors', JSON.stringify(arr));
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  // GET - return JSON array
  const raw = await VISITORS.get('visitors');
  const arr = raw ? JSON.parse(raw) : [];
  return new Response(JSON.stringify(arr), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
