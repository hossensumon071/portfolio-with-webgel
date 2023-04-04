import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675747465/289554497_1015982149057609_6129868633435145651_n_iv20yj.jpg",
  img2: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675745943/291467632_610781560240420_6903546436471216747_n_hz4qtt.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadlineRef1 = useRef(null);
  const heroHeadlineRef2 = useRef(null);

  const headlines = [heroHeadlineRef1, heroHeadlineRef2];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div className="hero container mx-auto mt-40 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadlineRef1}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadlineRef2}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
