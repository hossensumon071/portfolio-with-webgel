import SectionTitle from "./SectionTitle";

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
  return (
    <div className="container mx-auto mt-40" id="skills">
      <SectionTitle title={"skills"} />

      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden ">
                <div className="flex gap-10 items-baseline">
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
              <li key={skill.id} className="skill-item overflow-hidden ">
                <div className="flex gap-10 items-baseline">
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
