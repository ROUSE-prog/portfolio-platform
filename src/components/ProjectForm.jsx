import { useState } from "react";
import React from "react";


function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    onAddProject(newProject);
    setTitle("");
    setDescription("");
  }

  return (
    <section className="panel">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit} className="project-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;