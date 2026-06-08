Cloudflare Worker visitor collector

This is a small Cloudflare Worker scaffold that collects visitor records into a KV namespace.

Setup

1. Install Wrangler: `npm i -g wrangler` or follow Cloudflare docs.
2. Create a KV namespace in your Cloudflare account and bind it with the name `VISITORS`.
3. Create `wrangler.toml` for this worker and bind the KV namespace. Example:

```toml
name = "visitor-collector"
main = "index.js"
compatibility_date = "2024-01-01"

[env.production]
account_id = "YOUR_ACCOUNT_ID"

[[kv_namespaces]]
binding = "VISITORS"
id = "<your-kv-id>"
```

4. Publish with `wrangler publish --env production`.

Notes

- The worker stores visitor records under a single key `visitors` as a JSON array. Trim limit is set in `index.js` as `MAX_RECORDS`.
- To make your site send data to the worker, edit `dashboard.html` and `index.html` and set `COLLECTOR_URL` to your worker's public URL.
