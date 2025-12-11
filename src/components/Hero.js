import React from "react";
import {
  Mail,
  ExternalLink,
  Linkedin,
  Github,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export default function Hero({ isVisible }) {
  return (
    <section className="flex items-center justify-center min-h-screen overflow-hidden relative">
      {/* Animated background effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 50%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: "var(--primary)",
              opacity: Math.random() * 0.3 + 0.1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`text-center px-6 transform transition-all duration-1000 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Profile Image with enhanced styling */}
        <div
          className="mx-auto mb-8 rounded-full p-1 shadow-2xl relative group"
          style={{
            width: 180,
            height: 180,
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle, var(--primary), transparent)",
              filter: "blur(20px)",
              transform: "scale(1.2)",
            }}
          />

          <div
            className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative"
            style={{ backgroundColor: "var(--card)" }}
          >
            <img
              src="images/"
              alt="Clinton Nyakoe"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = "none";
                const fallback = e.target.nextSibling;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="hidden items-center justify-center w-full h-full text-5xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              CN
            </div>
          </div>

          {/* Status indicator with pulse */}
          <div className="absolute bottom-4 right-4">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#22c55e",
                animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <div
              className="relative w-6 h-6 rounded-full border-4"
              style={{
                backgroundColor: "#22c55e",
                borderColor: "var(--card)",
                boxShadow: "0 0 0 2px var(--card)",
              }}
              title="Available for work"
            />
          </div>
        </div>

        {/* Greeting with icon */}
        <div
          className={`mb-4 transition-all duration-700 delay-200 flex items-center justify-center gap-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Sparkles size={20} style={{ color: "var(--primary)" }} />
          <p
            className="text-lg font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Welcome! I'm
          </p>
        </div>

        {/* Name with enhanced gradient */}
        <h1
          className={`font-extrabold mb-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary), var(--primary))",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradientShift 5s ease infinite",
            letterSpacing: "-0.02em",
          }}
        >
          Clinton Nyakoe
        </h1>

        {/* Title with typing effect */}
        <div
          className={`mb-6 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "var(--muted-foreground)",
            }}
          >
            Software Engineer
            <span
              className="inline-block w-1 h-8 ml-2 align-middle"
              style={{
                backgroundColor: "var(--primary)",
                animation: "blink 1s step-end infinite",
              }}
            />
          </p>
        </div>

        {/* Enhanced description with highlights */}
        <p
          className={`mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            maxWidth: 768,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--muted-foreground)",
          }}
        >
          Full-stack developer passionate about leveraging technology to solve
          real-world problems. Specialized in{" "}
          <span
            className="font-semibold px-2 py-1 rounded"
            style={{
              color: "var(--primary)",
              backgroundColor: "rgba(59,130,246,0.1)",
            }}
          >
            healthcare systems
          </span>
          ,{" "}
          <span
            className="font-semibold px-2 py-1 rounded"
            style={{
              color: "var(--primary)",
              backgroundColor: "rgba(59,130,246,0.1)",
            }}
          >
            automation
          </span>
          , and{" "}
          <span
            className="font-semibold px-2 py-1 rounded"
            style={{
              color: "var(--primary)",
              backgroundColor: "rgba(59,130,246,0.1)",
            }}
          >
            modern web development
          </span>
          .
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="mailto:clintonnyakoe@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition-all hover:scale-105 hover:shadow-2xl group"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              border: "none",
            }}
          >
            <Mail
              size={20}
              className="transition-transform group-hover:rotate-12"
            />
            <span>Get in Touch</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold border-2 transition-all hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
              backgroundColor: "transparent",
            }}
          >
            {/* Hover background effect */}
            <div
              className="absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
              style={{
                background: "var(--primary)",
                opacity: 0.1,
              }}
            />
            <ExternalLink
              size={20}
              className="relative z-10 transition-transform group-hover:rotate-12"
            />
            <span className="relative z-10">View Projects</span>
          </a>
        </div>

        {/* Enhanced Social Links */}
        <div
          className={`flex justify-center gap-4 mb-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              icon: Mail,
              href: "mailto:clintonnyakoe@gmail.com",
              label: "Email",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/clinton-nyakoe-00953b270/",
              label: "LinkedIn",
            },
            {
              icon: Github,
              href: "https://github.com/Clinton431",
              label: "GitHub",
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-4 rounded-full transition-all hover:scale-110 hover:-translate-y-2 group relative"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              aria-label={social.label}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "var(--primary)",
                  filter: "blur(10px)",
                  transform: "scale(1.2)",
                  zIndex: -1,
                }}
              />
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Enhanced scroll indicator */}
        <div
          className={`transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-sm font-medium transition-all hover:opacity-70 group"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span>Scroll to explore</span>
            <div
              className="p-2 rounded-full border-2 transition-all group-hover:border-primary"
              style={{ borderColor: "var(--border)" }}
            >
              <ArrowDown
                size={20}
                style={{
                  animation: "bounce 2s infinite",
                }}
              />
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
