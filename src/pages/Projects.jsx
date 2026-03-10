import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

        {/* Project Cards Grid */}
        <section className="section projects-list">
          <div className="container">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={`/projects/${index}`}
                    className="project-card__link-wrapper"
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
                      <div className="project-card__meta">
                        <span className="project-card__number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="project-card__title">
                        {project.title}
                      </h2>

                      <div className="project-card__cta">
                        View Details →
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;
