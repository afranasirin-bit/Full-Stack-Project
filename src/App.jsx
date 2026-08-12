import "./App.css";
import profileImage from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          AFRA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">
            Hello, I'm
          </p>

          <h1>
            Afra <span>Nasirin</span>
          </h1>

          <h2>
            B.Tech IT Student & Full Stack Developer
          </h2>

          <p className="description">
            I build modern, responsive and user-friendly web
            applications using modern technologies. I love learning
            new technologies, solving problems and creating creative
            digital experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              View Projects
            </a>

            <a
              href="/Afra-Nasirin-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              View Resume
            </a>

          </div>


          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#contact">
              Email
            </a>

          </div>

        </div>


        {/* PROFILE CARD */}
        <div className="hero-card">

          <div className="profile-circle">
            <img
              src={profileImage}
              alt="Afra Nasirin"
            />
          </div>

          <h3>
            AFRA NASIRIN
          </h3>

          <p>
            Information Technology
          </p>

          <div className="availability">
            ● Available for Opportunities
          </div>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="section">

        <p className="section-small">
          GET TO KNOW ME
        </p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          I'm Afra Nasirin, a B.Tech Information Technology student
          and aspiring full-stack developer. I enjoy building
          modern, responsive and user-friendly web applications.
          I'm passionate about learning new technologies, solving
          problems and turning creative ideas into real-world
          projects.
        </p>


        <div className="about-cards">

          {/* CARD 1 */}
          <div className="info-card">

            <div className="info-icon">
              💻
            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Creating responsive and modern websites using HTML,
              CSS, JavaScript and React.
            </p>

          </div>


          {/* CARD 2 */}
          <div className="info-card">

            <div className="info-icon">
              🚀
            </div>

            <h3>
              Learning
            </h3>

            <p>
              Exploring new technologies and improving my
              development and problem-solving skills.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="info-card">

            <div className="info-icon">
              ✨
            </div>

            <h3>
              Creative Ideas
            </h3>

            <p>
              Turning ideas into attractive, useful and
              user-friendly digital experiences.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="section">

        <p className="section-small">
          MY TECHNOLOGIES
        </p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>


        <div className="skills-container">

          <div className="skill">
            HTML
          </div>

          <div className="skill">
            CSS
          </div>

          <div className="skill">
            JavaScript
          </div>

          <div className="skill">
            React.js
          </div>

          <div className="skill">
            Node.js
          </div>

          <div className="skill">
            MongoDB
          </div>

          <div className="skill">
            Python
          </div>

          <div className="skill">
            Java
          </div>

          <div className="skill">
            MySQL
          </div>

          <div className="skill">
            Git & GitHub
          </div>

          <div className="skill">
            Cloud Computing
          </div>

          <div className="skill">
            SQL
          </div>

        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="section">

        <p className="section-small">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>


        <div className="projects-container">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                ✓
              </div>

              <span className="project-number">
                01
              </span>

            </div>

            <h3>
              MERN To-Do App
            </h3>

            <p>
              A full-stack task management application where users
              can create, manage and track their daily tasks through
              a clean and modern interface.
            </p>

            <div className="project-tech">

              <span>
                React
              </span>

              <span>
                Node.js
              </span>

              <span>
                MongoDB
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                🍔
              </div>

              <span className="project-number">
                02
              </span>

            </div>

            <h3>
              Food Delivery Website
            </h3>

            <p>
              A responsive food delivery website with restaurant
              listings, food items, shopping cart and checkout
              interface.
            </p>

            <div className="project-tech">

              <span>
                React
              </span>

              <span>
                JavaScript
              </span>

              <span>
                CSS
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                📊
              </div>

              <span className="project-number">
                03
              </span>

            </div>

            <h3>
              Task Dashboard
            </h3>

            <p>
              A modern dashboard interface designed to organize
              tasks, monitor progress and display important
              information clearly.
            </p>

            <div className="project-tech">

              <span>
                React
              </span>

              <span>
                JavaScript
              </span>

              <span>
                CSS
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 4 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                📝
              </div>

              <span className="project-number">
                04
              </span>

            </div>

            <h3>
              Leave Management System
            </h3>

            <p>
              A web application that allows students or employees
              to apply for leave and manage their leave information
              through an organized interface.
            </p>

            <div className="project-tech">

              <span>
                React
              </span>

              <span>
                JavaScript
              </span>

              <span>
                CSS
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 5 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                💬
              </div>

              <span className="project-number">
                05
              </span>

            </div>

            <h3>
              Microblogging App
            </h3>

            <p>
              A social-style microblogging application where users
              can create and view short posts through a simple
              and responsive interface.
            </p>

            <div className="project-tech">

              <span>
                React
              </span>

              <span>
                JavaScript
              </span>

              <span>
                CSS
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 6 */}
          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                🚌
              </div>

              <span className="project-number">
                06
              </span>

            </div>

            <h3>
              College Bus Tracking
            </h3>

            <p>
              An IoT-based project concept designed to help
              students track college buses and improve
              transportation visibility and convenience.
            </p>

            <div className="project-tech">

              <span>
                IoT
              </span>

              <span>
                Arduino
              </span>

              <span>
                GPS
              </span>

            </div>

            <a
              href="#contact"
              className="project-link"
            >
              View Project →
            </a>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION SECTION ================= */}
      <section id="education" className="section">

        <p className="section-small">
          MY JOURNEY
        </p>

        <h2 className="section-title">
          My <span>Education</span>
        </h2>


        <div className="education-card">

          <div className="education-year">
            2024 — 2028
          </div>

          <div className="education-content">

            <h3>
              B.Tech Information Technology
            </h3>

            <h4>
              Mount Zion College of Engineering and Technology
            </h4>

            <p>
              Currently pursuing B.Tech in Information Technology
              with an interest in full-stack development, cloud
              computing and emerging technologies.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="section contact">

        <p className="section-small">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-text">
          I'm always interested in learning, collaborating and
          working on interesting projects. Feel free to reach out!
        </p>


        <div className="contact-container">


          {/* EMAIL */}
          <div className="contact-card">

            <div className="contact-icon">
              ✉
            </div>

            <h3>
              Email
            </h3>

            <p>
              Your Email Address
            </p>

            <a href="mailto:yourmail@gmail.com">
              Send Email →
            </a>

          </div>


          {/* GITHUB */}
          <div className="contact-card">

            <div className="contact-icon">
              💻
            </div>

            <h3>
              GitHub
            </h3>

            <p>
              My Projects & Code
            </p>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub →
            </a>

          </div>


          {/* LINKEDIN */}
          <div className="contact-card">

            <div className="contact-icon">
              💼
            </div>

            <h3>
              LinkedIn
            </h3>

            <p>
              Let's Connect Professionally
            </p>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn →
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          AFRA<span>.</span>
        </div>

        <p>
          Designed & Built by Afra Nasirin
        </p>

        <p className="copyright">
          © 2026 Afra Nasirin. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
{/* ================= HERO SECTION ================= */}
<section id="home" className="hero">

  {/* Background decorations */}
  <div className="hero-glow glow-one"></div>
  <div className="hero-glow glow-two"></div>
  <div className="hero-grid"></div>

  {/* LEFT CONTENT */}
  <div className="hero-content">

    <div className="hero-badge">
      <span className="status-dot"></span>
      Available for Opportunities
    </div>

    <p className="hello">
      HELLO, I'M
    </p>

    <h1>
      Afra
      <span> Nasirin</span>
    </h1>

    <div className="hero-role">
      <span>I'm a</span>
      <strong> B.Tech IT Student</strong>
    </div>

    <p className="description">
      I design and develop modern, responsive and user-friendly
      web applications. I'm passionate about full-stack development,
      cloud technologies and turning creative ideas into real-world
      digital experiences.
    </p>

    {/* BUTTONS */}
    <div className="hero-buttons">

      <a
        href="#projects"
        className="btn primary hero-btn"
      >
        Explore My Work
        <span>↗</span>
      </a>

      <a
        href="/Afra-Nasirin-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn secondary hero-btn"
      >
        Download Resume
        <span>↓</span>
      </a>

    </div>

    {/* SOCIAL LINKS */}
    <div className="hero-social">

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GitHub
      </a>

      <span className="social-line"></span>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        LinkedIn
      </a>

      <span className="social-line"></span>

      <a href="#contact">
        Email
      </a>

    </div>

  </div>


  {/* RIGHT PROFILE */}
  <div className="hero-visual">

    {/* Floating badge */}
    <div className="floating-badge badge-top">
      <span>✦</span>
      Creative Developer
    </div>

    {/* Main card */}
    <div className="profile-card">

      <div className="profile-ring">

        <div className="profile-circle">

          <img
            src={profileImage}
            alt="Afra Nasirin"
          />

        </div>

      </div>

      <div className="profile-info">

        <h3>
          AFRA NASIRIN
        </h3>

        <p>
          Information Technology
        </p>

      </div>

      <div className="profile-stats">

        <div>
          <strong>06+</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>12+</strong>
          <span>Skills</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Ideas</span>
        </div>

      </div>

    </div>


    {/* Floating tech badges */}
    <div className="floating-badge badge-react">
      <span>⚛</span>
      React
    </div>

    <div className="floating-badge badge-code">
      <span>&lt;/&gt;</span>
      Code
    </div>

    <div className="floating-badge badge-cloud">
      <span>☁</span>
      Cloud
    </div>

  </div>


  {/* Scroll indicator */}
  <a
    href="#about"
    className="scroll-indicator"
  >
    <span className="scroll-mouse"></span>

    <span>
      Scroll to explore
    </span>

    <span className="scroll-arrow">
      ↓
    </span>

  </a>

</section>