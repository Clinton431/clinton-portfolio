import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 1152 }}>
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background:
                "linear-gradient(to right, var(--primary), var(--secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            A showcase of my recent work across web development, automation, and
            system design
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                style={{
                  backgroundColor: "var(--card)",
                  border: "2px solid var(--border)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Gradient overlay background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05))",
                  }}
                />

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                    transformOrigin: "left",
                  }}
                />

                <div className="relative z-10 p-8">
                  {/* Icon and Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          backgroundColor: "rgba(59,130,246,0.12)",
                          color: "var(--primary)",
                        }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3
                          className="font-bold text-lg mb-1 group-hover:text-primary transition-colors"
                          style={{ color: "var(--foreground)" }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-xs font-medium px-2 py-1 rounded-full inline-block"
                          style={{
                            color: "var(--primary)",
                            backgroundColor: "rgba(59,130,246,0.08)",
                          }}
                        >
                          {project.organization}
                        </p>
                      </div>
                    </div>

                    {/* Arrow icon that appears on hover */}
                    <div
                      className="transition-all duration-300"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? "translate(0, 0)"
                          : "translate(-10px, 10px)",
                        color: "var(--primary)",
                      }}
                    >
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-6 leading-relaxed"
                    style={{
                      color: "var(--muted-foreground)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4
                      className="text-xs font-semibold mb-3 uppercase tracking-wide"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                          style={{
                            backgroundColor: "rgba(59,130,246,0.08)",
                            color: "var(--primary)",
                            border: "1px solid rgba(59,130,246,0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div
                    className="flex gap-3 pt-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:scale-105"
                        style={{
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        <ExternalLink size={16} />
                        <span>View Live</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm border-2 transition-all hover:scale-105"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--foreground)",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom corner decoration */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 transition-transform duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at bottom right, rgba(59,130,246,0.1), transparent)",
                    transform: isHovered ? "scale(1.5)" : "scale(1)",
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Clinton431"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105 hover:shadow-xl group"
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
