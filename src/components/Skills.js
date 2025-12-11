import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Monitor,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categoryIcons = {
    "Programming Languages": Code2,
    "Web Development": Globe,
    "Database Management": Database,
    "Developer Tools": Wrench,
    "Operating Systems": Monitor,
    "Other Skills": Layers,
  };

  const categoryColors = [
    {
      bg: "rgba(99, 102, 241, 0.1)",
      icon: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      shadow: "0 8px 32px rgba(99, 102, 241, 0.2)",
    },
    {
      bg: "rgba(16, 185, 129, 0.1)",
      icon: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      shadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
    },
    {
      bg: "rgba(139, 92, 246, 0.1)",
      icon: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
      shadow: "0 8px 32px rgba(139, 92, 246, 0.2)",
    },
    {
      bg: "rgba(245, 158, 11, 0.1)",
      icon: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      shadow: "0 8px 32px rgba(245, 158, 11, 0.2)",
    },
    {
      bg: "rgba(236, 72, 153, 0.1)",
      icon: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
      shadow: "0 8px 32px rgba(236, 72, 153, 0.2)",
    },
    {
      bg: "rgba(6, 182, 212, 0.1)",
      icon: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      shadow: "0 8px 32px rgba(6, 182, 212, 0.2)",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="mx-auto relative z-10" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            <Sparkles size={16} style={{ color: "#6366f1" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "#6366f1" }}
            >
              EXPERTISE
            </span>
          </div>

          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technical Skills
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, items], idx) => {
            const isCardHovered = hoveredCategory === idx;
            const IconComponent = categoryIcons[category] || Code2;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="rounded-2xl p-6 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${
                    isCardHovered
                      ? categoryColors[idx].icon + "40"
                      : "rgba(255, 255, 255, 0.1)"
                  }`,
                  boxShadow: isCardHovered
                    ? categoryColors[idx].shadow
                    : "0 4px 6px rgba(0,0,0,0.05)",
                  transform: isCardHovered
                    ? "translateY(-8px)"
                    : "translateY(0)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500"
                  style={{
                    background: categoryColors[idx].gradient,
                    opacity: isCardHovered ? 0.05 : 0,
                  }}
                ></div>

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className="p-3 rounded-xl transition-all duration-500"
                    style={{
                      background: isCardHovered
                        ? categoryColors[idx].gradient
                        : categoryColors[idx].bg,
                      color: isCardHovered ? "white" : categoryColors[idx].icon,
                      transform: isCardHovered
                        ? "rotate(5deg) scale(1.1)"
                        : "rotate(0deg) scale(1)",
                      boxShadow: isCardHovered
                        ? `0 4px 16px ${categoryColors[idx].icon}40`
                        : "none",
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{
                      color: "var(--foreground)",
                      transition: "all 0.3s",
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2 relative z-10">
                  {items.map((skill, sIdx) => {
                    const skillKey = `${idx}-${sIdx}`;
                    const isHovered = hoveredSkill === skillKey;

                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skillKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: isHovered
                            ? categoryColors[idx].bg
                            : "transparent",
                          transform: isHovered
                            ? "translateX(8px)"
                            : "translateX(0)",
                          borderLeft: isHovered
                            ? `3px solid ${categoryColors[idx].icon}`
                            : "3px solid transparent",
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: isHovered
                              ? categoryColors[idx].icon
                              : "var(--muted-foreground)",
                            transform: isHovered ? "scale(1.5)" : "scale(1)",
                            boxShadow: isHovered
                              ? `0 0 8px ${categoryColors[idx].icon}`
                              : "none",
                          }}
                        ></div>
                        <span
                          className="font-medium transition-all duration-300"
                          style={{
                            color: isHovered
                              ? categoryColors[idx].icon
                              : "var(--muted-foreground)",
                            fontSize: isHovered ? "0.9375rem" : "0.875rem",
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Skill Count Badge */}
                <div
                  className="mt-6 pt-4 border-t relative z-10"
                  style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: isCardHovered
                        ? categoryColors[idx].gradient
                        : categoryColors[idx].bg,
                      color: isCardHovered ? "white" : categoryColors[idx].icon,
                    }}
                  >
                    {items.length} {items.length === 1 ? "Skill" : "Skills"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <div
          className="mt-12 p-8 rounded-2xl relative overflow-hidden group"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
            }}
          ></div>

          <div className="flex items-start gap-4 relative z-10">
            <div
              className="p-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              <TrendingUp size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Currently Expanding My Expertise
              </h3>
              <p
                className="text-sm mb-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                Always learning and staying current with the latest technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud Architecture", "GraphQL", "TypeScript"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
                        color: "#6366f1",
                        border: "1px solid rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
