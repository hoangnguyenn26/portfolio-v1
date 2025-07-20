import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { IconTheme } from './icons';

const ToggleButton = styled.button`
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--green);
  background-color: transparent;
  padding: 0;

  .sun-and-moon {
    width: 24px;
    height: 24px;
    fill: var(--green);
    transform-origin: center center;
    transition: transform 0.5s ease;

    .sun {
      transition: transform 0.5s ease;
    }

    .sun-beams {
      transform-origin: center center;
      transition: transform 0.5s ease;
    }

    .moon > circle {
      transform-origin: center center;
      transition: transform 0.25s ease-out;
    }
  }

  &[aria-label='dark'] .sun-and-moon {
    transform: rotate(45deg);
  }

  &[aria-label='dark'] {
    .sun {
      transform: scale(1.75);
    }

    .sun-beams {
      transform: rotateZ(-90deg);
    }

    .moon > circle {
      transform: translateX(-7px);
    }
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={isDark ? 'dark' : 'light'}
      aria-live="polite"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      <IconTheme />
    </ToggleButton>
  );
};

export default ThemeToggle; 