// Real verified Google Reviews from Bello's Google Business Profile.
// Source: Google Maps listing (CID 17307317260568994331).
// Single source of truth — used by both HomeTestimonials display and the
// Review schema on the homepage. Editing here updates both at once.

export type Review = {
  authorName: string;        // Exactly as it appears on Google
  rating: number;            // 1-5
  reviewBody: string;        // Verbatim review text from Google
  datePublished: string;     // ISO date (approximate to month for Google reviews)
  reviewerProfile?: string;  // Optional: Google reviewer status (e.g. "Local Guide · 15 reviews")
};

export const VERIFIED_REVIEWS: Review[] = [
  {
    authorName: 'Carly Hyde',
    rating: 5,
    reviewBody:
      "I had my wedding dress tailored here and couldn't be happier with the results. The craftsmanship is top-notch—very high quality and done with great care. He's incredibly knowledgeable and was so patient with me as I requested multiple changes throughout the process. Pricing was fair. I recommend if you're looking for a great tailor on the West side!",
    datePublished: '2025-08-15',
    reviewerProfile: 'Google Review',
  },
  {
    authorName: 'Benjamin Tillis',
    rating: 5,
    reviewBody:
      'Excellent service and craftsmanship. Javier brought my wedding tuxedo vision to life and saved my pants that were way too tight. Will definitely coming back in the future.',
    datePublished: '2025-08-15',
    reviewerProfile: 'Local Guide · 23 reviews',
  },
  {
    authorName: 'Nicole Kohansamad',
    rating: 5,
    reviewBody:
      'Javier does excellent work and pays careful attention to detail. The shop is easy to communicate with over text and they have easy parking in the back. Quick turnaround times and fair prices.',
    datePublished: '2026-02-15',
    reviewerProfile: 'Local Guide · 15 reviews',
  },
  {
    authorName: 'Jack Paley',
    rating: 5,
    reviewBody:
      'A very well run and operated Tailor. Very good work performed here in all my experience with all the tailors in the Santa Monica area. A Five Star Tailor!',
    datePublished: '2026-03-15',
    reviewerProfile: 'Google Review',
  },
];

/**
 * Build Review[] objects for LocalBusiness JSON-LD.
 * Per Google guidelines, individual reviews nested inside the LocalBusiness
 * entity require @type, author, reviewRating, reviewBody, and datePublished.
 */
export function buildReviewSchema() {
  return VERIFIED_REVIEWS.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.authorName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.reviewBody,
    datePublished: r.datePublished,
  }));
}
