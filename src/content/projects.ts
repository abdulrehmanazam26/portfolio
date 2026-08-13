import { site } from './site';

export type Project = {
  slug: string;
  name: string;
  businessType: string;
  city: string;
  summary: string;
  problem: string;
  whatChanged: string;
  impact: string;
  /** TODO(abdulrehman): replace with a real screenshot path once available. */
  placeholder: true;
};

/**
 * TODO(abdulrehman): This file ships with 3 placeholder projects so the
 * corridor and case-study route have real structure to render. Replace each
 * entry with an actual project before this goes live — do not leave
 * `placeholder: true` entries public. Never use a client's name, logo, or
 * screenshots without their permission to go live with it.
 */
export const projects: Project[] = [
  {
    slug: 'project-one',
    name: 'Project One',
    businessType: 'Restaurant',
    city: site.city,
    summary: 'Old site had no menu online and didn’t work on phones.',
    problem:
      'TODO: describe the actual problem — e.g. the old site had no online menu, wasn’t mobile-friendly, and hadn’t been updated in years.',
    whatChanged:
      'TODO: describe what you actually changed — new structure, mobile layout, opening hours, menu, photos.',
    impact:
      'TODO: describe the real outcome for the business, in their words if possible.',
    placeholder: true,
  },
  {
    slug: 'project-two',
    name: 'Blüte & Stiel',
    businessType: 'Florist',
    city: site.city,
    summary: 'Concept redesign — a single unstyled page with a phone number became a real storefront.',
    problem:
      'The old site was one plain page: a shop name, opening hours, and a phone number in default browser text. No photos of the flowers, no way to see what a bouquet actually looked like, and nothing that worked on a phone — which is how most people would find a florist.',
    whatChanged:
      'A redesign built around the flowers themselves: a warm, editorial layout with a clear "order now" path, categories for bouquets and occasions, and a mobile-first layout since most visits happen on a phone standing outside the shop.',
    impact:
      'This one is a concept piece, not a live client yet — built to show the kind of transformation a small florist could expect: from an unreadable text page to a site that actually makes people want to order.',
    placeholder: true,
  },
  {
    slug: 'project-three',
    name: 'Project Three',
    businessType: 'Shop',
    city: site.city,
    summary: 'Old site looked closed — no hours, no photos, no clear address.',
    problem: 'TODO: describe the actual problem for this project.',
    whatChanged: 'TODO: describe what you actually changed.',
    impact: 'TODO: describe the real outcome.',
    placeholder: true,
  },
];

