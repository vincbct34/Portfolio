import { useEffect, useState } from "react";
import { useLang } from "../i18n/useLang";
import { fetchReviews, REVIEWS_ENDPOINT, type Review } from "../data/reviews";

export function Testimonials() {
  const { t } = useLang();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!REVIEWS_ENDPOINT) return;
    const controller = new AbortController();
    fetchReviews(controller.signal)
      .then(setReviews)
      .catch(() => setReviews([]));
    return () => controller.abort();
  }, []);

  // Nothing to show until the API is configured and returns reviews.
  if (reviews.length === 0) return null;

  return (
    <section className="testimonials section" id="testimonials">
      <div className="wrap">
        <p className="eyebrow">{t.testimonials.eyebrow}</p>
        <div className="testimonials__grid">
          {reviews.slice(0, 2).map((review, i) => (
            <figure className="quote" key={i}>
              <blockquote className="quote__text">“{review.quote}”</blockquote>
              <figcaption className="quote__author">
                <span className="quote__dash" aria-hidden="true" />
                <span className="quote__name">{review.name}</span>
                {review.role && (
                  <span className="quote__role">{review.role}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
