import { motion } from "framer-motion";
import {
  personalInfo,
  education,
  internships,
  skills,
  certificates,
} from "../data/resumeData";
import PageTransition from "../components/PageTransition";
import "./About.css";

const About = () => {
  const stagger = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <PageTransition>
      <div className="page-wrapper">
        {/* Intro */}
        <section className="section about-intro">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="gradient-text">me</span>
              <span className="accent-dot">.</span>
            </motion.h1>
            <motion.p
              className="about-intro__text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {personalInfo.aboutIntro}
            </motion.p>
          </div>
        </section>

        {/* Education */}
        <section className="section about-education">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education<span className="accent-dot">.</span>
            </motion.h2>
            <div className="edu-cards">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="edu-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="edu-card__header">
                    <div className="edu-card__icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <span className="edu-card__duration">{edu.duration}</span>
                  </div>
                  <h3 className="edu-card__institution">{edu.institution}</h3>
                  <p className="edu-card__degree">{edu.degree}</p>
                  <p className="edu-card__field">{edu.field}</p>
                  <div className="edu-card__gpa">
                    <span className="edu-card__gpa-label">GPA</span>
                    <span className="edu-card__gpa-value gradient-text">
                      {edu.gpa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section about-experience">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience<span className="accent-dot">.</span>
            </motion.h2>
            <div className="timeline">
              {internships.map((intern, i) => (
                <motion.div
                  key={i}
                  className="timeline__item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <div className="timeline__header">
                      <div>
                        <h3>{intern.role}</h3>
                        <p className="timeline__company">{intern.company}</p>
                      </div>
                      <span className="timeline__duration">
                        {intern.duration}
                      </span>
                    </div>
                    <ul className="timeline__highlights">
                      {intern.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section about-skills">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skills<span className="accent-dot">.</span>
            </motion.h2>
            <motion.div
              className="skill-bars"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  className="skill-bar"
                  variants={fadeIn}
                >
                  <h4 className="skill-bar__title">{skill.category}</h4>
                  <div className="skill-bar__items">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-bar__tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certificates */}
        <section className="section about-certificates">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Certificates<span className="accent-dot">.</span>
            </motion.h2>
            <div className="cert-grid">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  className="cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="cert-card__badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div className="cert-card__info">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
