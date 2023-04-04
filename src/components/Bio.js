import { useRef } from 'react';
import {useBioReveal} from '../hooks/gsap';

const Bio = () => {

  const bioRef =  useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio container mt-20 mx-auto overflow-hidden">
      <p ref={bioRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae sed vero molestiae corporis quidem, est tempore incidunt maxime soluta dolores praesentium magni omnis ullam quo nesciunt a. Iusto, qui?</p>
    </div>
  );
};

export default Bio;