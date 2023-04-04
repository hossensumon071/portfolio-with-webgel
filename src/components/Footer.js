import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='my-40 text-center text-white/50 overflow-hidden'>
      <p>&copy; {new Date().getFullYear()} <HashLink smooth to="#home" className='link-item hover:text-white duration-500'>sumon hossen</HashLink>. crfated by yours truly</p>
    </div>
  );
};

export default Footer;