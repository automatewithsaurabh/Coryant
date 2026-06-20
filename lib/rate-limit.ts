const store = new Map<string, number[]>();

const EVICTION_INTERVAL_MS = 5 * 60 * 1000;
let lastEviction = Date.now();

function evictStale(windowMs: number) {
  const cutoff = Date.now() - windowMs;
  for (const [ip, hits] of store) {
    const live = hits.filter((t) => t > cutoff);
    if (live.length === 0) {
      store.delete(ip);
    } else {
      store.set(ip, live);
    }
  }
  lastEviction = Date.now();
}

export function rateLimit(
  ip: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();

  if (now - lastEviction > EVICTION_INTERVAL_MS) {
    evictStale(windowMs);
  }

  const cutoff = now - windowMs;
  const hits = (store.get(ip) ?? []).filter((t) => t > cutoff);

  if (hits.length >= limit) {
    store.set(ip, hits);
    return false;
  }

  hits.push(now);
  store.set(ip, hits);
  return true;
}
