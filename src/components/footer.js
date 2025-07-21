import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const StyledScrollToTopButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
  outline: none;

  svg {
    stroke: #111;
    fill: none !important;
    transition: stroke 0.2s;
  }
  svg polyline {
    fill: none !important;
  }
  [data-theme='dark'] & svg {
    stroke: #fff;
  }
  &:hover svg,
  &:focus svg {
    stroke: var(--lightest-slate);
  }
`;

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleScrollToTop();
    }
  };

  return (
    <StyledScrollToTopButton
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="scroll-to-top-btn">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <polyline points="6 15 12 9 18 15" />
      </svg>
    </StyledScrollToTopButton>
  );
};

const Footer = () => {
  const gitHubUrl = 'https://github.com/hoangnguyenn26';
  const repoUrl = 'https://github.com/hoangnguyenn26/portfolio-v1';

  return (
    <StyledFooter>
      <ScrollToTopButton />
      <StyledSocialLinks>
        <ul>
          <li>
            <a href={gitHubUrl} aria-label="GitHub">
              <Icon name="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hgnguyen.26/" aria-label="Instagram">
              <Icon name="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hoang-nguyenn/" aria-label="LinkedIn">
              <Icon name="LinkedIn" />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>
      <StyledCredit tabindex="-1">
        <div>
          <a href={repoUrl}>Hoang Nguyen</a>
        </div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
