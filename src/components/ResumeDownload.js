import React from "react";
import { Download, FileText, Eye } from "lucide-react";

export default function ResumeDownload() {
  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
    >
      <div
        className="mx-auto rounded-2xl p-12 text-center"
        style={{
          maxWidth: 896,
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          background:
            "linear-gradient(135deg, var(--card) 0%, rgba(59,130,246,0.05) 100%)",
        }}
      >
        <div
          className="mx-auto mb-6 p-4 rounded-full inline-flex"
          style={{
            backgroundColor: "rgba(59,130,246,0.12)",
            color: "var(--primary)",
          }}
        >
          <FileText size={48} />
        </div>

        <h2
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            background:
              "linear-gradient(to right, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Download My Resume
        </h2>

        <p
          className="mb-8"
          style={{
            color: "var(--muted-foreground)",
            fontSize: "1.125rem",
            maxWidth: 600,
            margin: "0 auto 2rem",
          }}
        >
          Get a comprehensive overview of my skills, experience, and education
          in a downloadable format.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1o-5cLLYP9ELiZCRH-3XxbREUrm2aaOWu/view?usp=sharing"
            download
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1o-5cLLYP9ELiZCRH-3XxbREUrm2aaOWu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium border-2 transition-all hover:scale-105 hover:shadow-xl"
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
              backgroundColor: "transparent",
            }}
          >
            <Eye size={20} />
            <span>View Online</span>
          </a>
        </div>

        <p
          className="mt-6 text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          Last updated: December 2025 • PDF Format • 250KB
        </p>
      </div>
    </section>
  );
}
