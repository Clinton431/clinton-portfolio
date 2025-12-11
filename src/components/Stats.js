import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Code, Users, Award, TrendingUp } from "lucide-react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <Briefcase size={32} />,
      value: 6,
      suffix: "+",
      label: "Months Professional Experience",
      bgColor: "rgba(59,130,246,0.12)",
      iconColor: "rgba(59,130,246,1)",
      gradient:
        "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))",
    },
    {
      icon: <Code size={32} />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      bgColor: "rgba(34,197,94,0.12)",
      iconColor: "rgba(34,197,94,1)",
      gradient:
        "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))",
    },
    {
      icon: <Users size={32} />,
      value: 4,
      suffix: "",
      label: "Team Collaborations",
      bgColor: "rgba(168,85,247,0.12)",
      iconColor: "rgba(168,85,247,1)",
      gradient:
        "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(168,85,247,0.05))",
    },
    {
      icon: <Award size={32} />,
      value: 7,
      suffix: "+",
      label: "Certifications Earned",
      bgColor: "rgba(234,179,8,0.12)",
      iconColor: "rgba(234,179,8,1)",
      gradient:
        "linear-gradient(135deg, rgba(234,179,8,0.1), rgba(234,179,8,0.05))",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const startDelay = setTimeout(() => {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(startDelay);
    }, [isVisible, value, delay]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
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
            By the Numbers
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            Measurable impact and continuous growth in software development
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: "var(--card)",
                border: "2px solid var(--border)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: stat.gradient,
                }}
              />

              {/* Decorative circle */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
                style={{
                  background: `radial-gradient(circle, ${stat.iconColor}, transparent)`,
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="relative z-10 text-center">
                {/* Icon with enhanced styling */}
                <div className="flex justify-center mb-6">
                  <div
                    className="inline-flex p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: stat.bgColor,
                      color: stat.iconColor,
                      boxShadow: `0 8px 16px ${stat.bgColor}`,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Number with gradient */}
                <div
                  className="font-extrabold mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    background: `linear-gradient(135deg, ${stat.iconColor}, var(--primary))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={index * 100}
                  />
                </div>

                {/* Label */}
                <p
                  className="font-semibold leading-tight"
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.9rem",
                  }}
                >
                  {stat.label}
                </p>

                {/* Trending indicator */}
                <div
                  className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-all opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: stat.bgColor,
                    color: stat.iconColor,
                  }}
                >
                  <TrendingUp size={12} />
                  <span>Growing</span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{
                  background: `linear-gradient(to right, ${stat.iconColor}, transparent)`,
                  transformOrigin: "left",
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div
          className="mt-12 text-center p-6 rounded-xl"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: "var(--muted-foreground)" }}
          >
            💼 Open to new opportunities and exciting projects.{" "}
            <a
              href="#contact"
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--primary)" }}
            >
              Let's connect!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
