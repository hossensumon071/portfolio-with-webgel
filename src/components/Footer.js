import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {

  const footerRef = useRef(null);

  useFooterReveal(footerRef)

  return (
    <div className="my-40 text-center text-white/50 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-white duration-500"
        >
          sumon hossen
        </HashLink>
        . crfated by yours truly
      </p>
    </div>
  );
};

export default Footer;
