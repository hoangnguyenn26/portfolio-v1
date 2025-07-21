/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

const Script = () => {
  const code = `
    (function() {
      const storageKey = 'theme';
      const classNameDark = 'dark-mode';
      const classNameLight = 'light-mode';

      function getTheme() {
        let theme = window.localStorage.getItem(storageKey);
        if (theme) return theme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      const theme = getTheme();
      const root = document.documentElement;
      
      root.setAttribute('data-theme', theme);

      if (theme === 'dark') {
        root.classList.add(classNameDark);
      } else {
        root.classList.add(classNameLight);
      }
    })();
  `;
  return <script key="theme-script" dangerouslySetInnerHTML={{ __html: code }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<Script />);
};

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

// You can delete this file if you're not using it
