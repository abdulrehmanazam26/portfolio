import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#07060B',
        ink: '#12101C',
        violet: '#7B4DFF',
        magenta: '#E0389B',
        cyan: '#3DE0E8',
        bone: '#EDEAF5',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(4.5rem, 2.4rem + 8vw, 11rem)',
        h2: 'clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)',
        h3: 'clamp(1.5rem, 1.3rem + 0.8vw, 2rem)',
        body: 'clamp(1rem, 0.94rem + 0.3vw, 1.125rem)',
        caption: '0.8125rem',
      },
      letterSpacing: {
        display: '-0.03em',
        caption: '0.12em',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        focus: '0 0 0 2px #07060B, 0 0 0 4px #3DE0E8',
      },
    },
  },
  plugins: [],
};

export default config;
