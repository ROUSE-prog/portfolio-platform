import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="thumbnail">×</div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;