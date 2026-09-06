const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const requestLog = new Map<string, number[]>();

/**
 * In-memory sliding-window limiter. Sufficient for a single Node instance;
 * resets on cold start in serverless environments. Swap for a shared store
 * (e.g. Redis) if deploying across multiple instances.
 */
export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS) {
    requestLog.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return false;
}
