import { projects } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h3>Focused work and learning in progress.</h3>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <MagicBentoSurface
              as="article"
              key={project.title}
              className="project-card content-card highlight-card"
            >
              <div className="project-card-top">
                <span className="status-badge">{project.status}</span>
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                <li>
                  <strong>Contribution:</strong> {project.contribution}
                </li>
                <li>
                  <strong>Technologies:</strong> {project.technologies}
                </li>
              </ul>
            </MagicBentoSurface>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
