import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-700">
      {/* Image */}
      {imageUrl && (
        <img className="w-fit h-80 p-5 rounded-badge" src={imageUrl} alt={title} />
      )}

      {/* Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-white">{title}</div>
        <p className="text-white text-base text-center">{description}</p>
      </div>

      {/* Action Button */}
      <div className="pt-2 pb-6 text-center">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-white bg-black hover:text-black text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
