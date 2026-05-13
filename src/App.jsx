import React from "react";
import {
  ArrowUpRight,
  Award,
  Braces,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";

const contact = {
  email: "sonikumari7979018@gmail.com",
  phone: "7979018532",
  github: "https://github.com/Sonigupta-21",
  linkedin: "https://www.linkedin.com/in/contactsonikumari",
};

const skills = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["HTML5", "CSS3", "Bootstrap 5", "React.js", "Responsive UI"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "JavaScript", "React Hooks", "Component Design"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["SQL", "DBMS Fundamentals", "Data Handling"],
  },
  {
    title: "Tools",
    icon: Braces,
    items: ["Git", "GitHub", "VS Code", "Excel"],
  },
];

const projects = [
  {
    name: "Todo List Application",
    stack: "React.js, CSS",
    description:
      "A responsive task management app with real-time add and delete actions, dynamic UI updates, and React Hooks for state management.",
    points: ["useState based logic", "Mobile friendly layout", "Clean task controls"],
  },
  {
    name: "Personal Portfolio Website",
    stack: "HTML5, CSS3, Bootstrap 5",
    description:
      "Designed and deployed a live portfolio website with dedicated sections for skills, projects, education, and contact.",
    points: ["Deployed on GitHub", "Responsive sections", "Clean visual hierarchy"],
  },
];

const achievements = [
  {
    title: "ICIAI-2025",
    subtitle: "International Conference on Innovations & Applications of AI",
    date: "June 2025",
    text:
      "Selected for a nationally recognized AI research conference and contributed to event coordination while engaging with the Robo Rider project.",
  },
  {
    title: "SWAYAM Online Certification",
    subtitle: "Communication & Professional Skills",
    date: "December 2025",
    text:
      "Completed a nationally accredited course focused on professional communication and clear presentation of technical concepts.",
  },
];

const education = [
  {
    school: "Guru Kashi University, Bathinda, Punjab",
    program: "Bachelor of Computer Applications",
    date: "2024 - 2027",
    score: "CGPA 8.48 / 10",
  },
  {
    school: "Krishna Public School, Sundar Nagar, Bhilai",
    program: "Class XII - Science Stream",
    date: "2023 - 2024",
    score: "CGPA 7.89 / 10",
  },
];

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Soni<span>Kumari</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNav"
            aria-controls="portfolioNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="portfolioNav">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#education">Education</a>
              <a className="nav-link" href="#contact">Contact</a>
              <a className="btn btn-sm nav-cta" href={`mailto:${contact.email}`}>Hire Me</a>
            </div>
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-7">
                <div className="hero-kicker">
                  <Sparkles size={18} />
                  BCA Student | Web Developer
                </div>
                <h1>
                  Hi, I am <span>Soni Kumari</span>, building clean and
                  responsive web experiences.
                </h1>
                <p className="hero-copy">
                  I am a BCA student with an 8.48 CGPA and hands-on practice in
                  HTML, CSS, Bootstrap, React.js, Python, Git, and SQL. I enjoy
                  turning learning projects into polished, usable interfaces.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary btn-lg">
                    View Projects <ArrowUpRight size={19} />
                  </a>
                  <a href={`mailto:${contact.email}`} className="btn btn-outline-light btn-lg">
                    Contact Me
                  </a>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>8.48</strong>
                    <span>BCA CGPA</span>
                  </div>
                  <div>
                    <strong>2+</strong>
                    <span>Projects</span>
                  </div>
                  <div>
                    <strong>2027</strong>
                    <span>Graduation</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="profile-panel">
                  <div className="profile-orbit" />
                  <div className="profile-avatar">SK</div>
                  <h2>Soni Kumari</h2>
                  <p>Frontend Learner focused on React and Bootstrap</p>
                  <div className="profile-tags">
                    <span>React.js</span>
                    <span>Bootstrap</span>
                    <span>Python</span>
                    <span>SQL</span>
                  </div>
                  <div className="profile-links">
                    <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github size={21} />
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin size={21} />
                    </a>
                    <a href={`mailto:${contact.email}`} aria-label="Email">
                      <Mail size={21} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band about-band">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-5">
                <p className="section-label">Professional Summary</p>
                <h2>Learning fast, building carefully, and ready for web development work.</h2>
              </div>
              <div className="col-lg-7">
                <p className="large-text">
                  I am eager to start my career in web development and grow in a
                  professional environment. My current focus is creating responsive
                  frontend projects with React.js and Bootstrap while strengthening
                  my fundamentals in programming, databases, and communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Technical Skills</p>
              <h2>Tools I use to turn ideas into web interfaces.</h2>
            </div>
            <div className="row g-4">
              {skills.map(({ title, icon: Icon, items }) => (
                <div className="col-md-6 col-xl-3" key={title}>
                  <article className="skill-card">
                    <div className="icon-shell">
                      <Icon size={24} />
                    </div>
                    <h3>{title}</h3>
                    <div className="skill-list">
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section muted-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Featured Projects</p>
              <h2>Practice projects shaped into portfolio-ready work.</h2>
            </div>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-lg-6" key={project.name}>
                  <article className="project-card">
                    <div className="project-number">0{index + 1}</div>
                    <div>
                      <h3>{project.name}</h3>
                      <p className="project-stack">{project.stack}</p>
                      <p>{project.description}</p>
                      <div className="project-points">
                        {project.points.map((point) => (
                          <span key={point}>
                            <CheckCircle2 size={17} /> {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="education">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="section-heading text-start">
                  <p className="section-label">Education</p>
                  <h2>Academic foundation in computer applications.</h2>
                </div>
                <div className="timeline">
                  {education.map((item) => (
                    <article className="timeline-item" key={item.school}>
                      <GraduationCap size={24} />
                      <div>
                        <h3>{item.program}</h3>
                        <p>{item.school}</p>
                        <span>{item.date} | {item.score}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="section-heading text-start">
                  <p className="section-label">Certifications</p>
                  <h2>Achievements that strengthened my confidence.</h2>
                </div>
                <div className="achievement-stack">
                  {achievements.map((item) => (
                    <article className="achievement-card" key={item.title}>
                      <div className="achievement-top">
                        <Award size={24} />
                        <span><CalendarDays size={16} /> {item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="achievement-subtitle">{item.subtitle}</p>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-wrap">
              <div>
                <p className="section-label">Contact</p>
                <h2>Let us build something clean, useful, and responsive.</h2>
                <p>
                  I am open to entry-level web development opportunities,
                  internships, collaborations, and frontend practice projects.
                </p>
              </div>
              <div className="contact-list">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={20} /> {contact.email}
                </a>
                <a href={`tel:${contact.phone}`}>
                  <Phone size={20} /> {contact.phone}
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <Github size={20} /> GitHub Profile
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={20} /> LinkedIn Profile
                </a>
                <span>
                  <MapPin size={20} /> India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <span>Designed and developed for Soni Kumari</span>
          <a href="#home">
            Back to top <Rocket size={18} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
