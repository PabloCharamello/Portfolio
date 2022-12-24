import Lottie from "lottie-react";
import projects from "../../../../public/lotties/projects.json";
import "../mainPage.css";

const Projects = () => {
  return (
    <div className="projects">
      <Lottie
        animationData={projects}
        loop={true}
        className="landingPageLottie"
      />
    </div>
  );
};

export default Projects;
