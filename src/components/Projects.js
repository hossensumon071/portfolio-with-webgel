import Project from "./Project";

const data = [
  {
    id: 1,
    title: "ORBIT COUNCIL — A POWERFUL PROJECT MANAGEMENT APP",
    img1: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675264584/cld-sample-4.jpg",
    img2: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675264583/cld-sample-3.jpg",
    description: "With Orbit Council, users can create, update, and delete their own projects with ease. The app is highly secure, featuring robust JWT authentication and frontend route protection. In addition, the app boasts a sleek and intuitive user interface, built using Tailwind CSS.",
    tools: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js", "Tailwind CSS"],
    liveLink: "https://www.google.com",
    frontEndLink: "https://www.google.com",
    backEndLink: "https://www.google.com"
  },
  {
    id: 2,
    title: "TORQUE XTREME — A CAR REPAIR SERVICE",
    img1: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675264584/cld-sample-4.jpg",
    img2: "https://res.cloudinary.com/dfbcglud8/image/upload/v1675264583/cld-sample-3.jpg",
    description: "Users can register and login through email/password, google or github account. Users can make order for a specific car repair service as well as add/edit services. User authorization has been implemented using JWT on the server side",
    tools: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js", "Tailwind CSS"],
    liveLink: "https://www.google.com",
    frontEndLink: "https://www.google.com",
    backEndLink: "https://www.google.com"
  },
]


const Projects = () => {
  return (
    <div className="container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {
          data.map((project) => (
            <Project key={project.id} project={project}/>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;