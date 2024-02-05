"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  subHeading: string;
  imageSrc: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ subHeading, imageSrc }) => {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (showButton && buttonRef.current && cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const offsetX = e.clientX - cardRect.left;
        const offsetY = e.clientY - cardRect.top;
        const buttonX = offsetX - buttonRect.width / 2;
        const buttonY = offsetY - buttonRect.height / 2;
        buttonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showButton]);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      ref={cardRef}
    >
      <Image src={imageSrc} alt="" />
      <div className="project-heading-wrapper">
        <h2 className="subheading">{subHeading}</h2>
      </div>
      {showButton && (
        <button
          className={showButton ? "open-project" : "hide-project"}
          ref={buttonRef}
        >
          Open
        </button>
      )}
    </div>
  );
};
export default ProjectCard;
