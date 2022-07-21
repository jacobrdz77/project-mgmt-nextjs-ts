import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  projectId: string;
  clientName: string;
  clientId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectId,
  clientName,
  clientId,
}) => {
  return (
    <div className="flex flex-col min-w-[260px] max-w-[260px] min-h-[320px] max-h-[360px] border">
      {/* Header */}
      <div className="flex justify-between p-[15px] bg-gray-100 border-b-[1px]">
        <a
          href={`/projects/${projectId}`}
          className="font-semibold hover:underline"
        >
          {title}
        </a>
        <span className="text-[18px] hover:cursor-pointer">...</span>
      </div>

      {/* Info */}
      <div className="grow p-[15px] flex flex-col">
        {/* Tags */}
        <div></div>
        {/* Description */}
        <div className="grow text-gray-400">{description}</div>
        {/* Footer */}
        <div className="">
          <div className="flex align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <a href={`/clients/${clientId}`} className="ml-2 hover:underline">
              {clientName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
