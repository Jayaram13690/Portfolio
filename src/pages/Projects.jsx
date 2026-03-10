import { motion } from "framer-motion";
import { projects } from "../data/resumeData";
import PageTransition from "../components/PageTransition";
import "./Projects.css";

const Projects = () => {
  return (
    <PageTransition>
      <div className="page-wrapper">
        {/* Header */}
        <section className="section projects-header">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My <span className="gradient-text">projects</span>
              <span className="accent-dot">.</span>
            </motion.h1>
            <motion.p
              className="projects-header__sub"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              A collection of projects I've built — from full-stack web apps to
              machine learning applications.
            </motion.p>
          </div>
        </section>

        {/* Project Cards */}
        <section className="section projects-list">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Image Section */}
                <div className="project-card__visual">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card__image"
                    />
                  ) : (
                    <div className="project-card__mockup">
                      <div className="mockup-bar">
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                      </div>
                      <div className="mockup-content">
                        <div className="mockup-line mockup-line--title"></div>
                        <div className="mockup-line mockup-line--short"></div>
                        <div className="mockup-grid">
                          <div className="mockup-box"></div>
                          <div className="mockup-box"></div>
                          <div className="mockup-box"></div>
                        </div>
                        <div className="mockup-line"></div>
                        <div className="mockup-line mockup-line--medium"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="project-card__content">
                  <div className="project-card__header">
                    <div className="project-card__meta">
                      <span className="project-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="project-card__date">{project.date}</span>
                    </div>
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        title="View on GitHub"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>

                  <h2 className="project-card__title">
                    {project.title}
                    <span className="accent-dot">.</span>
                  </h2>
                  {project.subtitle && (
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  )}

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <ul className="project-card__highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;
