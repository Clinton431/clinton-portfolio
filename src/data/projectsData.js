import React from "react";
import { Code, Database, Users } from "lucide-react";

export const projectsData = [
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
    liveLink: "#",
    githubLink: "https://github.com/Clinton431",
  },
  {
    title: "Automated Task Management System",
    organization: "Personal Project",
    description:
      "Linux-based system that automated routine administrative tasks using cron jobs and bash scripting, reducing daily workload by 25%.",
    technologies: ["Linux", "Bash", "Cron Jobs", "System Administration"],
    icon: <Code size={24} />,
    githubLink: "https://github.com/Clinton431",
  },
  {
    title: "E-Commerce Platform",
    organization: "University Team Project",
    description:
      "Led a team of 4 students to develop a fully functional e-commerce website with secure payment processing and inventory management.",
    technologies: ["MERN Stack", "Docker", "Git", "Payment Processing"],
    icon: <Users size={24} />,
    liveLink: "#",
    githubLink: "https://github.com/Clinton431",
  },
  {
    title: "Blogging Platform",
    organization: "Personal Project",
    description:
      "A fully functional MERN-based blogging platform with user authentication, post management, image uploads, and a rich text editor.",
    technologies: ["MERN Stack", "Docker", "Git", "Bash"],
    icon: <Code size={24} />,
    githubLink: "https://github.com/Clinton431",
  },
  {
    title: "Optimization Algorithms",
    organization: "Academic Project",
    description:
      "Implemented and evaluated multiple optimization techniques including gradient descent, Newton's method, genetic algorithms, and simulated annealing.",
    technologies: [
      "Python",
      "NumPy",
      "Machine Learning",
      "Mathematical Optimization",
    ],
    icon: <Code size={24} />,
    githubLink: "https://github.com/Clinton431",
  },
  {
    title: "Movie Streaming Platform",
    organization: "Personal Project",
    description:
      "A full-stack movie streaming site with user authentication, movie categories, search filters, watchlists, and a responsive UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    icon: <Code size={24} />,
    liveLink: "#",
    githubLink: "https://github.com/Clinton431",
  },
];
