import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledLanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  padding: 8px 12px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${props => props.active ? 1 : 0.6};

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 11px;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    
    // Add/remove vietnamese-text class based on language
    if (language === 'vi') {
      document.body.classList.add('vietnamese-text');
    } else {
      document.body.classList.remove('vietnamese-text');
    }
  };

  return (
    <StyledLanguageSwitcher>
      <LanguageButton
        active={i18n.language === 'en'}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={i18n.language === 'vi'}
        onClick={() => handleLanguageChange('vi')}
        aria-label="Chuyển sang tiếng Việt"
      >
        VI
      </LanguageButton>
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher; 