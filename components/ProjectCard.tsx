import React from "react";

const ProjectCard: React.FC<{
  title: string;
  description: string;
  projectId: string;
  clientName: string;
}> = ({ title, description, projectId, clientName }) => {
  return (
    <div className="flex flex-col min-w-[280px] max-w-[280px] min-h-[320px] max-h-[360px] border border-slate-300">
      {/* Header */}
      <div className="flex justify-between p-[15px] bg-slate-100 border-b-2">
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
        <div></div>
        {/* Description */}
        <div className="grow text-gray-400">{description}</div>
        {/* Footer */}
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
          <span className="ml-1">{clientName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
