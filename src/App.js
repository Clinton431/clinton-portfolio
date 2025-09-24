import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)",
      color: "white",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heroSection: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "0 24px",
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
      opacity: isVisible ? 1 : 0,
      transition: "all 1s ease-out",
    },
    mainTitle: {
      fontSize: "clamp(3rem, 8vw, 6rem)",
      fontWeight: "bold",
      marginBottom: "24px",
      background: "linear-gradient(to right, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      marginBottom: "32px",
      color: "#d1d5db",
    },
    description: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      marginBottom: "48px",
      color: "#9ca3af",
      maxWidth: "768px",
      margin: "0 auto 48px",
      lineHeight: "1.6",
    },
    buttonContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "24px",
      marginBottom: "10px",
    },
    primaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      backgroundColor: "#2563eb",
      color: "white",
      borderRadius: "50px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },
    secondaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      border: "1px solid #9ca3af",
      color: "white",
      borderRadius: "50px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      backgroundColor: "transparent",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "32px",
    },
    socialLink: {
      padding: "12px",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "white",
    },
    section: {
      padding: "80px 24px",
    },
    sectionDark: {
      padding: "80px 24px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    container6xl: {
      maxWidth: "1152px",
      margin: "0 auto",
    },
    container4xl: {
      maxWidth: "896px",
      margin: "0 auto",
    },
    sectionTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: "bold",
      marginBottom: "64px",
      textAlign: "center",
      background: "linear-gradient(to right, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "48px",
      alignItems: "center",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
    },
    card: {
      background:
        "linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(109, 40, 217, 0.3))",
      borderRadius: "16px",
      padding: "32px",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    },
    projectCard: {
      background:
        "linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(109, 40, 217, 0.2))",
      borderRadius: "16px",
      padding: "32px",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    experienceCard: {
      background:
        "linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(109, 40, 217, 0.3))",
      borderRadius: "16px",
      padding: "48px",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "24px",
    },
    techTag: {
      padding: "4px 12px",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      color: "#93c5fd",
      borderRadius: "50px",
      fontSize: "0.875rem",
    },
    bulletPoint: {
      display: "flex",
      gap: "16px",
      marginBottom: "16px",
    },
    bullet: {
      width: "8px",
      height: "8px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      marginTop: "12px",
      flexShrink: 0,
    },
    contactInfo: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "24px",
      paddingTop: "24px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    certGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    certCard: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "24px",
      background:
        "linear-gradient(to right, rgba(30, 58, 138, 0.2), rgba(109, 40, 217, 0.2))",
      borderRadius: "12px",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    },
    iconContainer: {
      padding: "12px",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderRadius: "8px",
    },
    footer: {
      padding: "32px",
      textAlign: "center",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      color: "#9ca3af",
    },
  };

  const skills = {
    "Programming Languages": ["Java", "Python", "PHP", "JavaScript"],
    "Web Development": ["HTML5", "CSS3", "React", "RESTful APIs", "Bootstrap"],
    "Database Management": ["MySQL", "MongoDB", "SQLite"],
    "Developer Tools": ["Git", "GitLab", "VS Code", "Docker"],
    "Operating Systems": ["Linux (Ubuntu, CentOS)", "Windows"],
    "Other Skills": [
      "Agile Methodology",
      "Test-Driven Development",
      "CI/CD",
      "AWS Cloud Services",
    ],
  };

  const projects = [
    {
      title: "Hotel/Restaurant Management System",
      organization: "Professional Project",
      description:
        "Comprehensive management system built with MERN stack featuring room/table reservations, order management, inventory tracking, and customer billing with real-time updates.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT Auth",
        "Payment Integration",
      ],
      icon: <Database size={24} />,
    },
    {
      title: "Automated Task Management System",
      organization: "Personal Project",
      description:
        "Linux-based system that automated routine administrative tasks using cron jobs and bash scripting, reducing daily workload by 25%.",
      technologies: ["Linux", "Bash", "Cron Jobs", "System Administration"],
      icon: <Code size={24} />,
    },
    {
      title: "E-Commerce Platform",
      organization: "University Team Project",
      description:
        "Led a team of 4 students to develop a fully functional e-commerce website with secure payment processing and inventory management.",
      technologies: ["MERN Stack", "Docker", "Git", "Payment Processing"],
      icon: <Users size={24} />,
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      status: "In Progress",
      icon: <Cloud size={20} />,
    },
    {
      name: "Python for Data Science and ML",
      status: "Completed",
      icon: <Code size={20} />,
    },
    {
      name: "Responsive Web Design",
      status: "Completed",
      icon: <Code size={20} />,
    },
    {
      name: "Cyber Security - CISCO",
      status: "Completed",
      icon: <Shield size={20} />,
    },
    {
      name: "Database Administration",
      status: "Completed",
      icon: <Database size={20} />,
    },
    {
      name: "Linux System Administration",
      status: "Completed",
      icon: <Code size={20} />,
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          {/* Profile Photo */}
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              margin: "0 auto 32px",
              background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
              padding: "4px",
              boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#1e293b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                color: "#60a5fa",
                fontWeight: "bold",
                overflow: "hidden",
              }}
            >
              <img
                src="images/"
                alt="Clinton Nyakoe"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  fontSize: "3rem",
                  color: "#60a5fa",
                }}
              >
                CN
              </div>
            </div>
          </div>

          <h1 style={styles.mainTitle}>Clinton Nyakoe</h1>
          <p style={styles.subtitle}>Software Engineer</p>
          <p style={styles.description}>
            Full-stack developer passionate about leveraging technology to solve
            real-world problems. Experienced in healthcare systems, automation,
            and modern web development.
          </p>

          <div style={styles.buttonContainer}>
            <a href="clintonnyakoe@gmail.com" style={styles.primaryButton}>
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a href="#projects" style={styles.secondaryButton}>
              <ExternalLink size={20} />
              <span>View Work</span>
            </a>
          </div>

          <div style={styles.socialContainer}>
            <a href="mailto:clintonnyakoe@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/clinton-nyakoe"
              style={styles.socialLink}
            >
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Clinton431" style={styles.socialLink}>
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>About Me</h2>

          <div style={styles.grid2}>
            <div>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#d1d5db",
                  marginBottom: "24px",
                  lineHeight: "1.7",
                }}
              >
                I'm a detail-oriented Software Engineering graduate with
                hands-on experience in full-stack development and process
                automation. My journey has taken me through developing
                healthcare information systems at the Ministry of Health, where
                I improved data management and reduced manual workloads
                significantly.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#d1d5db",
                  marginBottom: "24px",
                  lineHeight: "1.7",
                }}
              >
                I thrive in collaborative environments and have a proven track
                record of delivering projects ahead of schedule. My passion lies
                in creating efficient, user-friendly solutions that make a real
                impact.
              </p>

              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <Phone size={20} style={{ color: "#60a5fa" }} />
                  <span style={{ color: "#d1d5db" }}>(+254) 112-464407</span>
                </div>
                <div style={styles.contactItem}>
                  <MapPin size={20} style={{ color: "#60a5fa" }} />
                  <span style={{ color: "#d1d5db" }}>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Education
              </h3>
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#60a5fa",
                    marginBottom: "8px",
                  }}
                >
                  Software Engineering Certification
                </h4>
                <p style={{ color: "#d1d5db", marginBottom: "4px" }}>
                  ALX University, Nairobi
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Calendar size={16} />
                  Graduated: Jul 2025
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#60a5fa",
                    marginBottom: "8px",
                  }}
                >
                  Bachelor of Science in Information Technology
                </h4>
                <p style={{ color: "#d1d5db", marginBottom: "4px" }}>
                  Murang'a University Of Technology
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Calendar size={16} />
                  Graduated: August 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.sectionDark}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>Experience</h2>

          <div style={styles.experienceCard}>
            <div style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#60a5fa",
                  marginBottom: "8px",
                }}
              >
                Software Developer Attaché
              </h3>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#d1d5db",
                  marginBottom: "8px",
                }}
              >
                Ministry of Health, Nairobi
              </p>
              <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                April - Sep 2024
              </span>
            </div>

            <div>
              <div style={styles.bulletPoint}>
                {/* <div style={styles.bullet}></div> */}
                <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                  Developed and maintained full-stack components for the
                  national healthcare information system,{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                    and user satisfaction. improving data management and
                    accessibility for healthcare professionals.
                  </span>{" "}
                </p>
              </div>
              <div style={styles.bulletPoint}>
                {/* <div style={styles.bullet}></div> */}
                <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                  Collaborated with UX designers and backend engineers to
                  implement responsive interfaces, reducing navigation time{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                    and user satisfaction.
                  </span>
                </p>
              </div>
              <div style={styles.bulletPoint}>
                {/* <div style={styles.bullet}></div> */}
                <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                  Created automated Python scripts that streamlined data
                  migration processes, reducing manual workload{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                    enhancing productivity
                  </span>{" "}
                  and improving data accuracy.{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "600" }}></span>
                </p>
              </div>
              <div style={styles.bulletPoint}>
                {/* <div style={styles.bullet}></div> */}
                <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                  Participated in Agile sprints, completing{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                    {" "}
                    three major project milestones ahead of schedule
                  </span>{" "}
                  with minimal defects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>

          <div style={styles.grid3}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  ...styles.projectCard,
                  ":hover": {
                    transform: "scale(1.05)",
                    borderColor: "rgba(96, 165, 250, 0.5)",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div style={styles.iconContainer}>{project.icon}</div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                      {project.organization}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    color: "#d1d5db",
                    marginBottom: "24px",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                <div style={styles.techStack}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={styles.sectionDark}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>

          <div style={styles.grid3}>
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} style={styles.card}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    color: "#60a5fa",
                  }}
                >
                  {category}
                </h3>
                <div>
                  {items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#a78bfa",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <span style={{ color: "#d1d5db" }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section style={styles.section}>
        <div style={styles.container4xl}>
          <h2 style={styles.sectionTitle}>Certifications</h2>

          <div style={styles.certGrid}>
            {certifications.map((cert, index) => (
              <div key={index} style={styles.certCard}>
                <div style={styles.iconContainer}>{cert.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {cert.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      padding: "2px 8px",
                      borderRadius: "50px",
                      backgroundColor:
                        cert.status === "In Progress"
                          ? "rgba(234, 179, 8, 0.2)"
                          : "rgba(34, 197, 94, 0.2)",
                      color:
                        cert.status === "In Progress" ? "#fde047" : "#86efac",
                    }}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.sectionDark}>
        <div style={{ ...styles.container4xl, textAlign: "center" }}>
          <h2 style={styles.sectionTitle}>Let's Build Something Amazing</h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#d1d5db",
              marginBottom: "48px",
              maxWidth: "768px",
              margin: "0 auto 48px",
            }}
          >
            I'm always excited to work on new projects and collaborate with
            talented teams and individuals. Let's discuss how we can bring your
            ideas to life.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="mailto:clintonnyakoe@gmail.com"
              style={{
                ...styles.primaryButton,
                fontSize: "1.125rem",
                fontWeight: "600",
              }}
            >
              <Mail size={20} />
              clintonnyakoe@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/clinton-nyakoe-00953b270/"
              style={{
                ...styles.secondaryButton,
                fontSize: "1.125rem",
                fontWeight: "600",
              }}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Clinton Nyakoe. Built with React and lots of ☕</p>
      </footer>
    </div>
  );
};

export default Portfolio;
