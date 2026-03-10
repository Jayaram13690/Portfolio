import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo, skills } from "../data/resumeData";
import PageTransition from "../components/PageTransition";
import Avatar from "../components/Avatar";
import "./Home.css";

const Home = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <PageTransition>
      <div className="page-wrapper">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__bg-grid"></div>
          <div className="hero__glow hero__glow--1"></div>
          <div className="hero__glow hero__glow--2"></div>
          <div className="container hero__container">
            <div className="hero__content">
              <motion.p
                className="hero__greeting"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={0}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="hero__title"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={1}
              >
                {personalInfo.name}
                <span className="accent-dot">.</span>
              </motion.h1>
              <motion.p
                className="hero__subtitle"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={2}
              >
                <span className="gradient-text">{personalInfo.tagline}</span>
              </motion.p>
              <motion.p
                className="hero__description"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={3}
              >
                {personalInfo.heroSubtitle}
              </motion.p>
              <motion.div
                className="hero__actions"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={4}
              >
                <Link to="/about" className="btn btn--primary">
                  About me
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/projects" className="btn btn--secondary">
                  View projects
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="hero__avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <Avatar />
            </motion.div>
          </div>
        </section>

        {/* Skills Overview Section */}
        <section className="section home-skills">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                What I <span className="gradient-text">work with</span>
                <span className="accent-dot">.</span>
              </h2>
              <p className="section-header__sub">
                Technologies and tools I use to bring ideas to life.
              </p>
            </motion.div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="skill-card__icon">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <h3 className="skill-card__title">{skill.category}</h3>
                  <div className="skill-card__tags">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section home-cta">
          <div className="container">
            <motion.div
              className="cta-block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                Let's build something
                <br />
                <span className="gradient-text">together</span>
                <span className="accent-dot">.</span>
              </h2>
              <p>
                I'm always open to new opportunities and exciting projects.
                Let's connect and create something amazing.
              </p>
              <div className="cta-block__actions">
                <Link to="/contact" className="btn btn--primary btn--lg">
                  Get in touch
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

function getSkillIcon(icon) {
  const icons = {
    code: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    layout: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    server: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    database: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    smartphone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    brain: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-1 2.65V10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8.65A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <path d="M12 12v10" />
        <path d="M8 22h8" />
        <path d="M7 8H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2" />
        <path d="M17 8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2" />
      </svg>
    ),
  };
  return icons[icon] || icons.code;
}

export default Home;
