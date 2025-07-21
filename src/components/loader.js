import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const Loader = ({ finishLoading }) => {
  const [stage, setStage] = useState(0); // 0: start, 1: dropped, 2: moving left, 3: show text

  useEffect(() => {
    const dropTimeout = setTimeout(() => setStage(1), 400);
    const moveTimeout = setTimeout(() => setStage(2), 1200);
    const textTimeout = setTimeout(() => setStage(3), 1700);
    const finishTimeout = setTimeout(() => finishLoading(), 2600);
    return () => {
      clearTimeout(dropTimeout);
      clearTimeout(moveTimeout);
      clearTimeout(textTimeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--dark-navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99,
        padding: '0 16px', // Responsive padding cho mobile
      }}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      {/* Container cho logo và text */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 0, // Cho phép co lại trên mobile
        }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          aria-label="Portfolio Logo"
          style={{
            width: 'clamp(56px, 18vw, 100px)', // Responsive logo
            height: 'auto',
            display: 'block',
            transform: `
              translateY(${stage === 0 ? '-100vh' : '0'}) 
              translateX(${stage >= 2 ? '-120px' : '0'})
            `,
            transition: 'transform 0.7s cubic-bezier(0.645,0.045,0.355,1)',
            maxWidth: '100vw',
          }}
        />
        {/* Text "Hoàng Nguyên" */}
        <span
          style={{
            position: 'absolute',
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 'bold',
            fontSize: 'clamp(1.25rem, 5vw, 2.5rem)', // Responsive font size
            color: 'var(--green)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            pointerEvents: 'none',
            userSelect: 'none',
            marginLeft: 'clamp(8px, 2vw, 24px)', // Responsive margin
            opacity: stage >= 3 ? 1 : 0,
            maxWidth: stage >= 3 ? '80vw' : '0', // Responsive max width
            transition: 'opacity 0.7s ease-out, max-width 0.7s ease-out',
          }}
          aria-label="Hoàng Nguyên">
          Hoàng Nguyên
        </span>
      </div>
    </div>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
