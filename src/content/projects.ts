export type Project = {
  slug: string;
  name: string;
  businessType: string;
  city: string;
  summary: string;
  description: string;
  tags: string[];
  /** Public production URL opened from the project card and case study. */
  liveUrl: string;
  /** Hero image shown on the work card and case-study page. */
  image?: string;
  /** A couple of supporting shots shown on the case-study page. */
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: 'blooming-bridge',
    name: 'Blooming Bridge Florist',
    businessType: 'Florist',
    city: 'Newcastle West',
    summary: 'A responsive florist website built around flower categories, ordering, and mobile usability.',
    description:
      'A responsive website for a local florist, covering services, flower categories, and an ordering path, with contact details and a layout built mobile-first since most visits happen on a phone.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/work/blooming-bridge/hero.png',
    liveUrl: 'https://site-six-beige-60.vercel.app',
    gallery: ['/work/blooming-bridge/gallery-1.png', '/work/blooming-bridge/gallery-2.png'],
  },
  {
    slug: 'asad-marble',
    name: 'Asad Tile, Marble & Sanitary',
    businessType: 'Showroom',
    city: 'Karachi',
    summary: 'A visual business website and catalog for tile, marble, and sanitary products.',
    description:
      'A photo-led catalog site for a tile, marble, and sanitary fixtures showroom, organized by product category with showroom information and direct customer contact.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/work/asad-marble/hero.jpg',
    liveUrl: 'https://marbel-mu.vercel.app',
    gallery: [
      '/work/asad-marble/gallery-1.jpg',
      '/work/asad-marble/gallery-2.jpg',
      '/work/asad-marble/gallery-3.jpg',
    ],
  },
  {
    slug: 'vayani-medico',
    name: 'Vayani Medico',
    businessType: 'Pharmacy',
    city: 'Karachi',
    summary: 'A responsive medical/pharmacy website with medicine listings and business information.',
    description:
      'A responsive pharmacy website with medicine-related pages, categories, and business information, built as an accessible customer-facing interface for browsing what the pharmacy carries.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/work/medical/hero.png',
    liveUrl: 'https://medical-xi-ruby.vercel.app',
    gallery: ['/work/medical/gallery-1.png'],
  },
  {
    slug: 'brut-burgers',
    name: 'Brut',
    businessType: 'Restaurant',
    city: 'Karachi',
    summary: 'A restaurant website with a bold visual identity, a menu, and an ordering path.',
    description:
      'A dark, brand-led website for a burger restaurant, built around product photography, a menu, and a clear path from browsing to ordering.',
    tags: ['JavaScript', 'Responsive Design'],
    image: '/work/burgers/hero.png',
    liveUrl: 'https://burgers-bice.vercel.app',
    gallery: ['/work/burgers/gallery-1.png', '/work/burgers/gallery-2.png'],
  },
];
