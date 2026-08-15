export type Project = {
  slug: string;
  name: string;
  businessType: string;
  city: string;
  summary: string;
  problem: string;
  whatChanged: string;
  impact: string;
  /** Public production URL opened from the project card and case study. */
  liveUrl: string;
  /** Hero image shown on the work card and case-study page. */
  image?: string;
  /** Lightweight version of `image`, used as a WebGL texture in the 3D corridor. */
  texture?: string;
  /** A couple of supporting shots shown on the case-study page. */
  gallery?: string[];
  /** True only for entries that still need real content before going live. */
  placeholder?: true;
};

export const projects: Project[] = [
  {
    slug: 'blooming-bridge',
    name: 'Blooming Bridge Florist',
    businessType: 'Florist',
    city: 'Newcastle West',
    summary: 'A florist with no website before — now a fast, mobile-first storefront that takes real orders.',
    problem:
      'Blooming Bridge Florist had no site at all — no way for a new customer to see what the shop offered, check prices, or order outside of calling or walking in.',
    whatChanged:
      'A single-page site built around ordering: bouquets organized by occasion, a pricing section so people know what to expect, and an order form that hands straight off to WhatsApp or email — no backend needed, nothing to host or maintain beyond static files.',
    impact:
      'The shop now has a real online presence customers can find, browse, and order from on their phone — the exact gap a walk-in-only florist had before.',
    image: '/work/blooming-bridge/hero.png',
    liveUrl: 'https://site-six-beige-60.vercel.app',
    texture: '/work/blooming-bridge/texture.jpg',
    gallery: ['/work/blooming-bridge/gallery-1.png', '/work/blooming-bridge/gallery-2.png'],
  },
  {
    slug: 'asad-marble',
    name: 'Asad Tile, Marble & Sanitary',
    businessType: 'Showroom',
    city: 'Karachi',
    summary: 'A tile, marble and sanitary showroom — redesigned as a visual catalog customers can browse before visiting.',
    problem:
      'A showroom business lives or dies on customers seeing the actual stone and tile finishes — the old presence gave people no way to browse the range before making the trip in.',
    whatChanged:
      'A photo-led site organized by category — floor tiles, wall tiles, marble, and sanitary fixtures — with a showroom gallery, direct call and WhatsApp contact, and a map link to the shop in Madina Market.',
    impact:
      'Customers can now browse the full range of finishes online first, arrive knowing roughly what they want, and reach the shop directly by phone or WhatsApp.',
    image: '/work/asad-marble/hero.jpg',
    liveUrl: 'https://marbel-mu.vercel.app',
    texture: '/work/asad-marble/texture.jpg',
    gallery: [
      '/work/asad-marble/gallery-1.jpg',
      '/work/asad-marble/gallery-2.jpg',
      '/work/asad-marble/gallery-3.jpg',
    ],
  },
  {
    slug: 'brut-burgers',
    name: 'Brut',
    businessType: 'Restaurant',
    city: 'Karachi',
    summary: 'A fried chicken burger restaurant with a bold, dark brand identity and a full online ordering site.',
    problem:
      'A new burger restaurant needed a launch site that matched the ambition of the brand — not a generic food-delivery template, but something with real visual identity.',
    whatChanged:
      'A dark, editorial site built around the brand — a bold wordmark, product photography front and center, and a direct path from browsing the menu to ordering.',
    impact:
      'The site gives the restaurant a launch presence that looks and feels like an established brand from day one, with ordering built in rather than bolted on.',
    image: '/work/burgers/hero.png',
    liveUrl: 'https://burgers-bice.vercel.app',
    gallery: ['/work/burgers/gallery-1.png', '/work/burgers/gallery-2.png'],
  },
  {
    slug: 'vayani-medico',
    name: 'Vayani Medico',
    businessType: 'Pharmacy',
    city: 'Karachi',
    summary: 'An 11-year-old neighborhood pharmacy, rebuilt as a full online store for medicines and healthcare essentials.',
    problem:
      'A trusted local pharmacy had no way for customers to browse or order online — everything depended on a phone call or a walk-in visit.',
    whatChanged:
      'A proper e-commerce build: categories for medicines, personal care, baby care and more, a searchable product catalog with stock and pricing, and a cart that leads straight to checkout or WhatsApp ordering.',
    impact:
      'Customers can now search for a specific medicine, see what is in stock, and order it for delivery — turning 11 years of local trust into an online storefront.',
    image: '/work/medical/hero.png',
    liveUrl: 'https://medical-xi-ruby.vercel.app',
    gallery: ['/work/medical/gallery-1.png'],
  },
];
