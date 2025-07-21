import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #0a192f;
    --navy: #f9f9f9;
    --light-navy: #ffffff;
    --lightest-navy: #ffffff;
    --navy-shadow: rgba(0, 0, 0, 0.07);
    --navy-scroll: rgba(249, 249, 249, 0.85);
    --dark-slate: #495670;
    --slate: #495670;
    --light-slate: #333333;
    --lightest-slate: #333333;
    --white: #333333;
    --green: #006400;
    --green-tint: rgba(0, 100, 0, 0.1);
    --pink: #ffc0cb;
    --blue: #0000ff;

    --spotlight-color: radial-gradient(
      circle,
      rgba(0, 100, 0, 0.25) 0%,
      rgba(0, 100, 0, 0.1) 40%,
      rgba(0, 100, 0, 0.1) 70%,
      transparent 100%
    );
    --spotlight-blend-mode: normal;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Consolas', 'Monaco',
      'Courier New', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
  [data-theme='dark'] {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --navy-scroll: rgba(10, 25, 47, 0.85);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --spotlight-color: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.25) 0%,
      rgba(56, 189, 248, 0.15) 40%,
      rgba(56, 189, 248, 0.05) 70%,
      transparent 100%
    );
    --spotlight-blend-mode: lighten;
  }
`;

export default variables;
