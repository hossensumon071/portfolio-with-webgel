import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675848716/1675833560175_n0fjtu.jpg",
  img2: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675848778/image_1_kkri6n.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];

  useProjectLeftRightReveal(abouts)

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40">
      <SectionTitle title={"About"} />

      <div className="about-wrapper grid grid-cols-2 mt-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a MERN stack developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the MERN stack, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups. My ability to combine my
            technical skills with my artistic eye allows me to create visually
            appealing and functional web applications that stand out in the
            market.
          </p>
          <a
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
