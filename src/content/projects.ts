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
    name: 'Project Two',
    businessType: 'Florist',
    city: site.city,
    summary: 'Old site was a single unstyled page with a phone number.',
    problem: 'TODO: describe the actual problem for this project.',
    whatChanged: 'TODO: describe what you actually changed.',
    impact: 'TODO: describe the real outcome.',
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

