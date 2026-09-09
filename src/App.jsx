import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /* =========================================
     MOUSE FOLLOWING GLOW
  ========================================= */

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* =========================================
     VIEW RESUME
  ========================================= */

  const viewResume = () => {
    window.open(
      "/Afra-Nasirin-Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================
     DOWNLOAD RESUME
  ========================================= */

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Afra-Nasirin-Resume.pdf";
    link.download = "Afra-Nasirin-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* =========================================
     SKILLS
  ========================================= */

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "SQL",
    "Git & GitHub",
    "Docker",
    "AI / ML",
  ];

  /* =========================================
     PROJECTS
  ========================================= */

  const projects = [
    {
      number: "01",
      title: "Railway Maintenance Optimizer",
      description:
        "An intelligent railway maintenance scheduling system that combines AI, optimization and railway constraints to create efficient maintenance schedules.",
      tech: "React • Node.js • Python • Scikit-learn • OR-Tools",
    },

    {
      number: "02",
      title: "ClassiHub",
      description:
        "A modern classified web application that allows users to buy and sell used products through a simple and user-friendly platform.",
      tech: "React • Node.js • Express.js • Database",
    },

    {
      number: "03",
      title: "Cloud Computing Project",
      description:
        "A cloud computing project focused on cloud resources, containers, Docker and scheduling concepts.",
      tech: "Cloud Computing • Docker • Java",
    },
  ];

  return (
    <div
      className="app"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className="navbar">

        <div className="logo">
          AFRA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =========================================
          HERO
      ========================================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            B.TECH IT • 3RD YEAR
          </p>

          <h1>
            Hi, I'm
            <span>Afra Nasirin</span>
          </h1>

          <h2>
            Full Stack Developer & AI Enthusiast
          </h2>

          <p className="hero-description">
            I build modern digital experiences using web technologies,
            programming, artificial intelligence and cloud technologies.
          </p>


          {/* HERO BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Work
            </a>


            <button
              type="button"
              onClick={viewResume}
              className="btn secondary-btn"
            >
              View Resume ↗
            </button>


            <button
              type="button"
              onClick={downloadResume}
              className="btn secondary-btn"
            >
              Download Resume ↓
            </button>

          </div>

        </div>


        {/* PROFILE IMAGE */}

        <div className="hero-image">

          <div className="image-glow"></div>

          <img
            src="/profile.jpg"
            alt="Afra Nasirin"
          />

        </div>

      </section>


      {/* =========================================
          PROFILE CARDS
      ========================================= */}

      <section className="profile-section">

        <div className="profile-card">

          <div className="profile-icon">
            ⌘
          </div>

          <div>

            <p className="card-label">
              CURRENT FOCUS
            </p>

            <h3>
              Building • Learning • Creating
            </h3>

          </div>

        </div>


        <div className="profile-card">

          <div className="profile-icon">
            ◈
          </div>

          <div>

            <p className="card-label">
              INTERESTS
            </p>

            <h3>
              AI • Full Stack • Cloud
            </h3>

          </div>

        </div>


        <div className="profile-card">

          <div className="profile-icon">
            ✦
          </div>

          <div>

            <p className="card-label">
              GOAL
            </p>

            <h3>
              Become a Skilled Developer
            </h3>

          </div>

        </div>

      </section>


      {/* =========================================
          ABOUT
      ========================================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            01 / ABOUT
          </p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

        </div>


        <div className="about-content">

          <p>
            I'm Afra Nasirin, a B.Tech Information
            Technology student at Mount Zion College
            of Engineering and Technology.
          </p>

          <p>
            I enjoy developing websites and applications
            while exploring artificial intelligence,
            cloud computing and modern software
            technologies.
          </p>

          <p>
            I believe in learning by building real
            projects and continuously improving my
            technical skills.
          </p>

        </div>

      </section>


      {/* =========================================
          SKILLS
      ========================================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            02 / TECH STACK
          </p>

          <h2>
            Tools I
            <span> work with.</span>
          </h2>

        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={skill}
            >

              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                {skill}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================
          PROJECTS
      ========================================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            03 / PROJECTS
          </p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-symbol">
                  ↗
                </span>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="project-tech">
                {project.tech}
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================
          JOURNEY
      ========================================= */}

      <section
        id="journey"
        className="section journey-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            04 / JOURNEY
          </p>

          <h2>
            My learning
            <span> journey.</span>
          </h2>

        </div>


        <div className="timeline">


          {/* 2024 */}

          <div className="timeline-item">

            <span className="timeline-year">
              2024
            </span>

            <div className="timeline-content">

              <h3>
                Started B.Tech IT
              </h3>

              <p>
                Started my journey in Information
                Technology and explored programming
                fundamentals.
              </p>

            </div>

          </div>


          {/* 2025 */}

          <div className="timeline-item">

            <span className="timeline-year">
              2025
            </span>

            <div className="timeline-content">

              <h3>
                Exploring Development
              </h3>

              <p>
                Started working with web development,
                databases, programming and software
                projects.
              </p>

            </div>

          </div>


          {/* 2026 */}

          <div className="timeline-item">

            <span className="timeline-year">
              2026
            </span>

            <div className="timeline-content">

              <h3>
                Building & Growing
              </h3>

              <p>
                Focused on full-stack development,
                AI, cloud technologies and real-world
                projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          EDUCATION
      ========================================= */}

      <section className="section education-section">

        <div className="section-heading">

          <p className="section-tag">
            05 / EDUCATION
          </p>

          <h2>
            Academic
            <span> background.</span>
          </h2>

        </div>


        <div className="education-card">

          <div className="education-year">
            2024 — PRESENT
          </div>

          <div>

            <h3>
              B.Tech – Information Technology
            </h3>

            <p>
              Mount Zion College of Engineering
              and Technology
            </p>

            <span>
              3rd Year
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="contact-box">

          <p className="section-tag">
            06 / CONTACT
          </p>


          <h2>
            Let's build something
            <span> great.</span>
          </h2>


          <p>
            Have a project idea, collaboration
            opportunity or simply want to connect?
            Feel free to reach out through any of
            my platforms.
          </p>


          {/* CONTACT LINKS */}

          <div className="contact-links">


            {/* PHONE */}

            <a
              href="tel:+917397061354"
              className="contact-link"
            >

              <span className="contact-icon">
                ☎
              </span>

              <div>

                <small>
                  PHONE
                </small>

                <strong>
                  +91 73970 61354
                </strong>

              </div>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:afranasirin@gmail.com"
              className="contact-link"
            >

              <span className="contact-icon">
                ✉
              </span>

              <div>

                <small>
                  EMAIL
                </small>

                <strong>
                  afranasirin@gmail.com
                </strong>

              </div>

            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/afranasirin78/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >

              <span className="contact-icon">
                ◎
              </span>

              <div>

                <small>
                  INSTAGRAM
                </small>

                <strong>
                  @afranasirin78
                </strong>

              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/afranasirin-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >

              <span className="contact-icon">
                ◉
              </span>

              <div>

                <small>
                  GITHUB
                </small>

                <strong>
                  github.com/afranasirin-bit
                </strong>

              </div>

            </a>

          </div>


          {/* GET IN TOUCH */}

          <a
            href="mailto:afranasirin@gmail.com"
            className="contact-button"
          >
            Get In Touch →
          </a>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="footer">

        <p>
          © 2026 Afra Nasirin. Built with React.
        </p>


        <div className="footer-links">

          <a
            href="https://github.com/afranasirin-bit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/afranasirin78/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;