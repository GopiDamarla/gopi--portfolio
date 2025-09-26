import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="services about-section" ref={ref}>
      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 className="about-title" variants={itemVariants}>
          Introduction
        </motion.h1>

        <motion.div className="about-container" variants={itemVariants}>
          <motion.img
            src="/gopifull.jpg"
            alt="Profile"
            className="profile-img"
            variants={itemVariants}
          />

          <div className="about-content">
            <motion.p className="about-description" variants={itemVariants}>
              I am an Enthusiastic and detail-oriented Full Stack Developer with
              a strong foundation in building responsive web applications.
              Proficient in front-end frameworks like React.js and Next.js, and
              back-end technologies like Java Spring Boot.
            </motion.p>

            <motion.div className="about-cards" variants={itemVariants}>
              {[
                {
                  icon: "/code-icon-dark.png",
                  title: "Languages",
                  text: "HTML, CSS, JavaScript, React, Next.js, Java, Spring Boot",
                },
                {
                  icon: "/edu-icon-dark.png",
                  title: "Education",
                  text: "B.Tech in Electrical & Electronics Engineering",
                },
                {
                  icon: "/project-icon-dark.png",
                  title: "Projects",
                  text: "Built more than 5 projects",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                >
                  <div className="card-icon">
                    <img src={card.icon} alt={`${card.title} icon`} width="24" />
                  </div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-text">{card.text}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="tools-used" variants={itemVariants}>
              <span>Tools I use</span>
              <div className="tools-icons">
                {[
                  "vscode",
                  "html5",
                  "css3",
                  "javascript",
                  "react",
                ].map((tool) => (
                  <img
                    key={tool}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`}
                    alt={tool}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
