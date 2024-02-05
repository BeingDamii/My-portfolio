import Image, { StaticImageData } from "next/image";
import FPimgOne from "../assets/FP-img-1.png"

interface ProjectCardProps {
  subHeading: string;
  imageSrc: StaticImageData; // Assuming FPimgOne is a string representing the image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ subHeading, imageSrc }) => {
  return (
    <div className="project-card">
      <Image src={imageSrc} alt="" /> 
      <div className="project-heading-wrapper">
        <h2 className="subheading">{subHeading}</h2>
      </div>
    </div>
  );
};
export default ProjectCard;
