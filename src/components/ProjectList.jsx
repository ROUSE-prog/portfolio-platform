import ProjectCard from "./ProjectCard";
import React from "react";

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;