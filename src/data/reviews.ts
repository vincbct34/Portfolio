/**
 * Client testimonials, fetched live from your app's API.
 *
 * 1. Set REVIEWS_ENDPOINT to your API URL (e.g. "https://app.example.com/api/reviews").
 * 2. If your JSON shape differs, adjust `mapReview` below — it converts one raw
 *    API object into the { quote, name, role } the UI expects.
 *
 * While the endpoint is empty, the testimonials section is simply hidden.
 */
export const REVIEWS_ENDPOINT = "";

export interface Review {
  quote: string;
  name: string;
  role: string;
}

/** Adapt this to your API's response shape. */
export function mapReview(raw: unknown): Review | null {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const quote = (r.quote ?? r.text ?? r.body ?? r.content) as
    | string
    | undefined;
  const name = (r.name ?? r.author ?? r.client) as string | undefined;
  const role = (r.role ?? r.company ?? r.title ?? "") as string | undefined;
  if (!quote || !name) return null;
  return { quote, name, role: role ?? "" };
}

export async function fetchReviews(signal?: AbortSignal): Promise<Review[]> {
  if (!REVIEWS_ENDPOINT) return [];
  const res = await fetch(REVIEWS_ENDPOINT, { signal });
  if (!res.ok) throw new Error(`Reviews request failed: ${res.status}`);
  const data: unknown = await res.json();
  const list = Array.isArray(data)
    ? data
    : Array.isArray((data as Record<string, unknown>)?.reviews)
      ? ((data as Record<string, unknown>).reviews as unknown[])
      : [];
  return list.map(mapReview).filter((r): r is Review => r !== null);
}
