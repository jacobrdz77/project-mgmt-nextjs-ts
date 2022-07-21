import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/UI/Header";
import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPage: NextPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const addProjectHandler = (): void => {};

  useEffect(() => {
    async function getProjects() {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(() => {
        return data.DUMMY_PROJECTS;
      });
    }
    getProjects();
  }, []);

  return (
    <Layout>
      {/* Wrapper */}
      <div className="pt-5 px-6">
        <Header title="Projects" buttonHandler={addProjectHandler} />
        <hr className="mt-4" />
        {/* Filter buttons */}
        <div className="text-[14px] flex justify-end">
          <button className="border-2 border-slate-500 p-1">Sort By</button>
        </div>
        <div className="grid grid-cols-2 ">
          {/* Grid of projects */}
          {projects.length !== 0 ? (
            projects.map((project) => (
              <ProjectCard
                title={project.name}
                key={project.id}
                projectId={project.id}
                description={project.description}
                clientName={project.clientName}
              />
            ))
          ) : (
            <p>No Projects</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
