import Image from "next/image";
import FPimgOne from "../assets/FP-img-1.png";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div>
      <div className="heading-wrapper">
        <h1>Featured projects.</h1>
      </div>
      <div className="project-card-wrapper">
        <ProjectCard
          imageSrc={FPimgOne}
          subHeading="Building an online results verifier to combat election rigging in the
          2023 Nigerian national elections."
        />
        <ProjectCard
          imageSrc={FPimgOne}
          subHeading="Redesigning VEFI's NFT marketplace to serve 8,000 community members."
        />
        <ProjectCard
          imageSrc={FPimgOne}
          subHeading="Web-app to showcase various places to visit around Africa."
        />
        <ProjectCard
          imageSrc={FPimgOne}
          subHeading="Curating my favorite Beephop Lo-Fi sounds into an online playlist"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
