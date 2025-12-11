import React, { useState } from "react";
import { certificationsData } from "../data/certificationsData";
import {
  ExternalLink,
  Calendar,
  Award,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Separate certifications by status
  const completed = certificationsData.filter(
    (cert) => cert.status === "Completed"
  );
  const inProgress = certificationsData.filter(
    (cert) => cert.status === "In Progress"
  );

  const CertificationCard = ({ cert, index, isInProgress }) => {
    const isHovered = hoveredIndex === index;

    return (
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="rounded-xl p-6 transition-all duration-300 group relative overflow-hidden"
        style={{
          backgroundColor: "var(--card)",
          border: "2px solid var(--border)",
          boxShadow: isHovered
            ? "0 12px 24px rgba(0,0,0,0.15)"
            : "0 4px 6px rgba(0,0,0,0.05)",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Animated background gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: isInProgress
              ? "linear-gradient(135deg, rgba(234,179,8,0.05), transparent)"
              : "linear-gradient(135deg, rgba(34,197,94,0.05), transparent)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="relative z-10">
          {/* Header with Icon and Status */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: isInProgress
                  ? "rgba(234,179,8,0.12)"
                  : "rgba(34,197,94,0.12)",
                transform: isHovered
                  ? "scale(1.1) rotate(5deg)"
                  : "scale(1) rotate(0deg)",
              }}
            >
              <div
                style={{
                  color: isInProgress
                    ? "rgba(234,179,8,1)"
                    : "rgba(34,197,94,1)",
                }}
              >
                {cert.icon}
              </div>
            </div>

            {/* Status Badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: isInProgress
                  ? "rgba(234,179,8,0.12)"
                  : "rgba(34,197,94,0.12)",
                color: isInProgress ? "rgba(234,179,8,1)" : "rgba(34,197,94,1)",
              }}
            >
              {isInProgress ? (
                <>
                  <Clock size={14} />
                  <span>In Progress</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} />
                  <span>Completed</span>
                </>
              )}
            </div>
          </div>

          {/* Certification Name */}
          <h3
            className="font-bold mb-3 leading-tight"
            style={{
              color: "var(--foreground)",
              fontSize: "1.125rem",
            }}
          >
            {cert.name}
          </h3>

          {/* Issuer */}
          {cert.issuer && (
            <p
              className="text-sm mb-3 flex items-center gap-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Award size={14} />
              <span>{cert.issuer}</span>
            </p>
          )}

          {/* Date */}
          {cert.date && (
            <p
              className="text-sm mb-4 flex items-center gap-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Calendar size={14} />
              <span>{cert.date}</span>
            </p>
          )}

          {/* View Certificate Link */}
          {cert.link && !isInProgress && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all"
              style={{
                color: "var(--primary)",
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              <span>View Certificate</span>
              <ExternalLink
                size={14}
                style={{
                  transform: isHovered
                    ? "translate(2px, -2px)"
                    : "translate(0, 0)",
                  transition: "transform 0.2s",
                }}
              />
            </a>
          )}

          {isInProgress && (
            <div className="mt-3">
              <div
                className="text-xs font-medium mb-2"
                style={{ color: "var(--muted-foreground)" }}
              >
                Expected completion: {cert.expectedDate || "Soon"}
              </div>
            </div>
          )}
        </div>

        {/* Corner decoration */}
        <div
          className="absolute top-0 right-0 w-20 h-20 transition-transform duration-300"
          style={{
            background: isInProgress
              ? "radial-gradient(circle at top right, rgba(234,179,8,0.1), transparent)"
              : "radial-gradient(circle at top right, rgba(34,197,94,0.1), transparent)",
            transform: isHovered ? "scale(1.5)" : "scale(1)",
          }}
        />
      </div>
    );
  };

  return (
    <section className="py-20 px-6">
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
            Certifications & Credentials
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            Continuously expanding my expertise through professional
            certifications
          </p>
        </div>

        {/* In Progress Section */}
        {inProgress.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-1 flex-1 rounded-full"
                style={{ backgroundColor: "var(--border)" }}
              />
              <h3
                className="font-bold text-xl flex items-center gap-2"
                style={{ color: "var(--foreground)" }}
              >
                <Clock size={20} style={{ color: "rgba(234,179,8,1)" }} />
                Currently Pursuing
              </h3>
              <div
                className="h-1 flex-1 rounded-full"
                style={{ backgroundColor: "var(--border)" }}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inProgress.map((cert, i) => (
                <CertificationCard
                  key={i}
                  cert={cert}
                  index={`progress-${i}`}
                  isInProgress={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completed Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-1 flex-1 rounded-full"
              style={{ backgroundColor: "var(--border)" }}
            />
            <h3
              className="font-bold text-xl flex items-center gap-2"
              style={{ color: "var(--foreground)" }}
            >
              <CheckCircle2 size={20} style={{ color: "rgba(34,197,94,1)" }} />
              Completed Certifications
            </h3>
            <div
              className="h-1 flex-1 rounded-full"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completed.map((cert, i) => (
              <CertificationCard
                key={i}
                cert={cert}
                index={`completed-${i}`}
                isInProgress={false}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div
          className="mt-12 grid gap-4 md:grid-cols-3 text-center p-8 rounded-xl"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--primary)" }}
            >
              {certificationsData.length}
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--muted-foreground)" }}
            >
              Total Certifications
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "rgba(34,197,94,1)" }}
            >
              {completed.length}
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--muted-foreground)" }}
            >
              Completed
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "rgba(234,179,8,1)" }}
            >
              {inProgress.length}
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--muted-foreground)" }}
            >
              In Progress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
