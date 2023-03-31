import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="container flex justify-between mx-auto mt-20">
      <div>
        <HashLink smooth to="#home" className="link-item">
          Rebecca Parker
        </HashLink>
      </div>
      <ul className="links flex gap-12">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <Link
            href="https://www.google.com"
            target="_blank"
            rel="norefrerr"
            className="link-item"
          >Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
