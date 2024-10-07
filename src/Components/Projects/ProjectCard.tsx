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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {/* Image */}
      {imageUrl && (
        <img className="w-full object-cover h-48" src={imageUrl} alt={title} />
      )}

      {/* Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* Action Button */}
      <div className="px-6 pt-4 pb-2">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
