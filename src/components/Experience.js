import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Users,
  Code,
  Target,
} from "lucide-react";

export default function Experience() {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const experiences = [
    {
      title: "Software Developer Attaché",
      company: "Ministry of Health",
      location: "Nairobi, Kenya",
      period: "April - September 2024",
      type: "Internship",
      achievements: [
        {
          icon: <Code size={20} />,
          text: "Developed and maintained full-stack components for the national healthcare information system,",
          highlight: "improving data management and accessibility",
          detail: "for healthcare professionals",
        },
        {
          icon: <Users size={20} />,
          text: "Collaborated with UX designers and backend engineers to implement responsive interfaces, reducing navigation time",
          highlight: "and increasing user satisfaction",
          detail: "",
        },
        {
          icon: <TrendingUp size={20} />,
          text: "Created automated Python scripts that streamlined data migration processes, reducing manual workload",
          highlight: "by 25% and enhancing productivity",
          detail: "while improving data accuracy",
        },
        {
          icon: <Target size={20} />,
          text: "Participated in Agile sprints, completing",
          highlight: "three major project milestones ahead of schedule",
          detail: "with minimal defects",
        },
      ],
      skills: [
        "React",
        "Python",
        "Full-Stack",
        "Healthcare IT",
        "Agile",
        "UI/UX",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6"
      style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
    >
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
            Professional Experience
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            Real-world impact through innovative software solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article key={index} className="relative group">
              {/* Timeline dot - for multiple experiences */}
              <div
                className="absolute left-0 top-8 w-4 h-4 rounded-full hidden md:block"
                style={{
                  backgroundColor: "var(--primary)",
                  boxShadow: "0 0 0 4px var(--card), 0 0 0 6px var(--primary)",
                }}
              />

              <div
                className="md:ml-12 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                style={{
                  backgroundColor: "var(--card)",
                  border: "2px solid var(--border)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-2"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                  }}
                />

                <div className="p-8 md:p-10">
                  {/* Header Section */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-3 rounded-xl"
                          style={{
                            backgroundColor: "rgba(59,130,246,0.12)",
                            color: "var(--primary)",
                          }}
                        >
                          <Briefcase size={24} />
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: "var(--primary)" }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="text-lg font-semibold"
                            style={{ color: "var(--foreground)" }}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div
                          className="flex items-center gap-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <span
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: "rgba(34,197,94,0.12)",
                        color: "rgba(34,197,94,1)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Achievements Section */}
                  <div className="mb-8">
                    <h4
                      className="text-sm font-semibold mb-4 uppercase tracking-wide flex items-center gap-2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <CheckCircle2 size={16} />
                      Key Achievements
                    </h4>

                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setHoveredAchievement(i)}
                          onMouseLeave={() => setHoveredAchievement(null)}
                          className="flex gap-4 p-4 rounded-xl transition-all duration-300"
                          style={{
                            backgroundColor:
                              hoveredAchievement === i
                                ? "rgba(59,130,246,0.05)"
                                : "transparent",
                            transform:
                              hoveredAchievement === i
                                ? "translateX(8px)"
                                : "translateX(0)",
                          }}
                        >
                          <div
                            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300"
                            style={{
                              backgroundColor: "rgba(59,130,246,0.12)",
                              color: "var(--primary)",
                              transform:
                                hoveredAchievement === i
                                  ? "scale(1.1) rotate(5deg)"
                                  : "scale(1) rotate(0deg)",
                            }}
                          >
                            {achievement.icon}
                          </div>

                          <div className="flex-1">
                            <p
                              className="leading-relaxed"
                              style={{
                                color: "var(--muted-foreground)",
                                fontSize: "0.95rem",
                              }}
                            >
                              {achievement.text}{" "}
                              <span
                                className="font-semibold"
                                style={{ color: "var(--primary)" }}
                              >
                                {achievement.highlight}
                              </span>{" "}
                              {achievement.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div
                    className="pt-6 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h4
                      className="text-sm font-semibold mb-3 uppercase tracking-wide"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
                          style={{
                            backgroundColor: "rgba(59,130,246,0.08)",
                            color: "var(--primary)",
                            border: "1px solid rgba(59,130,246,0.2)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom corner decoration */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none transition-transform duration-500 group-hover:scale-150"
                  style={{
                    background:
                      "radial-gradient(circle at bottom right, rgba(59,130,246,0.1), transparent)",
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-12 text-center p-8 rounded-xl"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-lg font-medium mb-4"
            style={{ color: "var(--foreground)" }}
          >
            💼 Looking for passionate developers?
          </p>
          <p className="mb-6" style={{ color: "var(--muted-foreground)" }}>
            I'm available for full-time opportunities and exciting projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            <Briefcase size={20} />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
