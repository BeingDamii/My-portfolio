import Image from "next/image";
import FPimgOne from "../assets/FP-img-1.png"

const ProjectCard = ({subHeading}) => {
  return (
    <div className="project-card">
      <Image src={FPimgOne} alt="" />
      <div className="project-heading-wrapper">
        <h2 className="subheading">
          {subHeading}
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
