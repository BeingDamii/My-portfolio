import Image from "next/image";
import FPimgOne from "../assets/FP-img-1.png";
import FPimgTwo from "../assets/FP-img-2.png";
import FPimgThree from "../assets/FP-img-3.png";
import FPimgFour from "../assets/FP-img-4.png";
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
          imageSrc={FPimgTwo}
          subHeading="Redesigning VEFI's NFT marketplace to serve 8,000 community members."
        />
        <ProjectCard
          imageSrc={FPimgThree}
          subHeading="Web-app to showcase various places to visit around Africa."
        />
        <ProjectCard
          imageSrc={FPimgFour}
          subHeading="Curating my favorite Beephop Lo-Fi sounds into an online playlist"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
