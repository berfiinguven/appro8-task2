
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Nova Studio",
      category: "Web Design",
      description:
        "A modern and responsive website for a creative digital studio.",
      tech: ["React", "CSS", "Responsive Design"],
    },
    {
      title: "TaskFlow",
      category: "Web Application",
      description:
        "A clean productivity app for organizing everyday tasks.",
      tech: ["React", "JavaScript", "Local Storage"],
    },
    {
      title: "Weatherly",
      category: "API Project",
      description:
        "A weather dashboard with a beautiful and intuitive interface.",
      tech: ["React", "API", "CSS"],
    },
  ]);

  return (
    <section className="section projects" id="projects">
      <p className="eyebrow">02 / SELECTED WORK</p>

      <h2 className="section-title">
        Featured <span>projects.</span>
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-image project-${index + 1}`}>
              <span>{project.title}</span>
            </div>

            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
