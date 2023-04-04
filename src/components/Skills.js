import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import {useSkillLineReveal, useSkillTextReveal} from "../hooks/gsap";

const data = [
  { id: 1, title: "html" },
  { id: 2, title: "css" },
  { id: 3, title: "bootstrap" },
  { id: 4, title: "tailwind css" },
  { id: 5, title: "javascript" },
  { id: 6, title: "react.js" },
  { id: 7, title: "react router" },
  { id: 8, title: "redux js" },
  { id: 9, title: "redux toolkit" },
  { id: 10, title: "axios" },
  { id: 11, title: "gsap" },
  { id: 12, title: "firebase" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillTextRef = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="container mx-auto mt-40" id="skills">
      <SectionTitle title={"skills"} />

      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div className="flex gap-10 items-baseline" ref={(el) => (skillText2Ref.current[i] = el)}>
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
