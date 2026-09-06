export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: 'PHP Developer | WordPress Developer',
    organization: 'ORIO TECH (PVT.) LTD.',
    period: 'August 2022 – 2024',
    points: [
      'WordPress website development',
      'PHP and JavaScript',
      'Custom plugin development',
      'REST API integration and testing',
      'Backend troubleshooting',
      'Domains, cPanel, hosting, and email setup',
      'Code review and client support',
    ],
  },
  {
    title: 'Back Office Associate',
    organization: 'BOZANKI',
    period: '2025 – 2026',
    points: [
      'Workflow management',
      'Data administration',
      'System updates',
      'Technical verification',
      'Operational troubleshooting',
      'Cross-team communication',
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Cyber Security',
    institution: 'DHA Suffa University',
    period: '2024 – 2028',
  },
  {
    degree: 'Intermediate',
    institution: 'Government Degree Science & Commerce College',
    period: '2021 – 2023',
  },
  {
    degree: 'Matriculation',
    institution: 'The Educators',
    period: '2007 – 2021',
  },
];

export const certifications: string[] = [
  'Foundations of Cybersecurity — Google / Coursera',
  'Manage Security Risks — Google / Coursera',
  'Introduction to Critical Infrastructure Protection (ICIP) — OPSWAT Academy',
];
