import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../data/resumeData";
import PageTransition from "../components/PageTransition";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <PageTransition>
        <div className="page-wrapper">
          <section className="section project-not-found">
            <div className="container">
              <h1>Project Not Found</h1>
              <p>The project you're looking for doesn't exist.</p>
              <Link to="/projects" className="btn-back">
                ← Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </PageTransition>
    );
  }

  const prevProject = projectIndex > 0 ? projectIndex - 1 : null;
  const nextProject = projectIndex < projects.length - 1 ? projectIndex + 1 : null;

  return (
    <PageTransition>
      <div className="page-wrapper">
        {/* Hero Section */}
        <motion.section
          className="section project-detail__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <Link to="/projects" className="breadcrumb">
              ← Back to Projects
            </Link>

            <div className="project-detail__visual">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-detail__image"
                />
              ) : (
                <div className="project-detail__mockup">
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
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section
          className="section project-detail__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="container container--narrow">
            <div className="project-detail__header">
              <div className="project-detail__meta">
                <span className="project-number">
                  {String(projectIndex + 1).padStart(2, "0")}
                </span>
                <span className="project-date">{project.date}</span>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__github-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              )}
            </div>

            <h1 className="project-detail__title">
              {project.title}
              <span className="accent-dot">.</span>
            </h1>

            {project.subtitle && (
              <p className="project-detail__subtitle">{project.subtitle}</p>
            )}

            <p className="project-detail__description">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="project-detail__section">
              <h2 className="section-title">Tech Stack</h2>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="project-detail__section">
              <h2 className="section-title">Key Features</h2>
              <ul className="features-list">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="feature-icon">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="project-detail__navigation">
              {prevProject !== null ? (
                <Link
                  to={`/projects/${prevProject}`}
                  className="nav-project nav-prev"
                >
                  <span className="nav-label">← Previous</span>
                  <span className="nav-title">
                    {projects[prevProject].title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}

              <Link to="/projects" className="nav-all-projects">
                ← All Projects
              </Link>

              {nextProject !== null ? (
                <Link
                  to={`/projects/${nextProject}`}
                  className="nav-project nav-next"
                >
                  <span className="nav-label">Next →</span>
                  <span className="nav-title">
                    {projects[nextProject].title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
