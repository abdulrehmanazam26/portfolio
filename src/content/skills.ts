export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Automation Focus',
    skills: [
      'AI-Assisted Development',
      'Prompt Engineering',
      'Chatbot Workflow Design',
      'Agent Workflow Design',
      'API-Connected Assistants',
      'Workflow Automation',
    ],
  },
  {
    title: 'Web Development',
    skills: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'WordPress', 'Custom WordPress Plugins'],
  },
  {
    title: 'Backend & Integration',
    skills: ['REST APIs', 'MySQL', 'Data Handling', 'Backend Troubleshooting'],
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'Vercel', 'cPanel', 'Domain Configuration', 'Business Email Setup'],
  },
];
