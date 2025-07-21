import React from 'react';
import logo from '../../images/logo.png';

const IconLoader = () => (
  <div className="relative w-[100px] h-[100px] flex items-center justify-center">
    <img
      src={logo}
      alt="Loading Logo"
      className="w-full h-full object-contain"
      style={{ maxWidth: 100, maxHeight: 100 }}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
      }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'conic-gradient(transparent 0deg 60deg, rgba(255,255,255,0.7) 60deg 90deg, transparent 90deg 360deg)',
          filter: 'blur(1px)',
          animation: 'rotate-sweep 1.5s linear infinite',
        }}
      />
      <style>{`
        @keyframes rotate-sweep {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

export default IconLoader;
