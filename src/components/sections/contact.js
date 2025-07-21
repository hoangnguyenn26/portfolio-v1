import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .section-label {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 700;
    margin-bottom: 20px;
  }

  .description {
    color: var(--light-slate);
    font-size: var(--fz-xl);
    margin-bottom: 40px;
    line-height: 1.5;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <span className="section-label">03. Contact Me</span>
      <h2 className="title">Get In Touch</h2>
      <p className="description">
        I thrive on building full-stack applications from the ground up, and I'm always excited to
        dive into new technologies like ASP.NET Core, Angular, and cloud services. I am a quick
        learner, highly motivated, and passionate about writing clean, efficient code.
      </p>
      <p>
        I'm actively seeking new opportunities to apply and expand my skills. Feel free to review my
        projects on GitHub or reach out to discuss a potential collaboration.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="email-link"
        href="https://mail.google.com/mail/u/0/?fs=1&to=hoangnguyenn268@gmail.com&tf=cm">
        Send an Email
      </a>
    </StyledContactSection>
  );
};

export default Contact;
