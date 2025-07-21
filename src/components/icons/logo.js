import React from 'react';
import logo from '../../images/logo.png';

const IconLogo = () => (
  <img
    src={logo}
    alt="Logo"
    className="w-full h-full object-contain"
    style={{ maxWidth: 42, maxHeight: 42 }}
  />
);

export default IconLogo;
