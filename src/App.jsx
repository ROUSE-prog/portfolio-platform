import React from "react";
import { useState } from "react";
import "./App.css";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

const starterProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of the project",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of the project",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of the project",
  },
];

function App() {
  const [projects, setProjects] = useState(starterProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="app">
      <header className="app-header">
        <h1>Personal Project Showcase App</h1>
      </header>

      <section className="content">
        <ProjectForm onAddProject={addProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </section>
    </main>
  );
}

export default App;