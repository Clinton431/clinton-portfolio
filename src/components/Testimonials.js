import React, { useState } from "react";
import { Quote, Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      name: "Dr. Jane Kamau",
      role: "Senior Developer, Ministry of Health",
      content:
        "Clinton demonstrated exceptional technical skills and a strong work ethic during his time with us. His automation scripts significantly improved our workflow efficiency.",
      rating: 5,
      image: null,
      color: "#6366f1",
    },
    {
      name: "Ken Mwangi",
      role: "Senior Software Engineer, Africa Real Estate",
      content:
        "One of the most dedicated and quick learners. Clinton's ability to grasp complex concepts and apply them practically is outstanding.",
      rating: 5,
      image: null,
      color: "#8b5cf6",
    },
    {
      name: "Kevin Agina",
      role: "Project Manager, University Team",
      content:
        "Working with Clinton on our e-commerce project was a pleasure. He consistently delivered quality code ahead of deadlines and was great at problem-solving.",
      rating: 5,
      image: null,
      color: "#ec4899",
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="mx-auto relative z-10" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <MessageCircle size={16} style={{ color: "#8b5cf6" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "#8b5cf6" }}
            >
              CLIENT REVIEWS
            </span>
          </div>

          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Testimonials
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
              maxWidth: 768,
              margin: "0 auto",
            }}
          >
            What colleagues and mentors say about working with me
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="rounded-2xl p-8 relative overflow-hidden transition-all duration-500 group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${
                    isHovered
                      ? testimonial.color + "60"
                      : "rgba(255, 255, 255, 0.1)"
                  }`,
                  backdropFilter: "blur(10px)",
                  transform: isHovered
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? `0 20px 60px ${testimonial.color}30`
                    : "0 4px 6px rgba(0,0,0,0.05)",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color}15 0%, ${testimonial.color}05 100%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                ></div>

                {/* Decorative quote background */}
                <div
                  className="absolute -top-4 -right-4 transition-all duration-500"
                  style={{
                    opacity: 0.06,
                    transform: isHovered
                      ? "rotate(12deg) scale(1.2)"
                      : "rotate(0deg) scale(1)",
                  }}
                >
                  <Quote size={120} style={{ color: testimonial.color }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300"
                      style={{
                        transform: isHovered
                          ? `translateY(-4px) rotate(${i * 5}deg)`
                          : "translateY(0) rotate(0deg)",
                        transitionDelay: `${i * 50}ms`,
                      }}
                    >
                      <Star
                        size={18}
                        fill={testimonial.color}
                        style={{ color: testimonial.color }}
                      />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <p
                  className="mb-8 leading-relaxed relative z-10"
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                  }}
                >
                  "{testimonial.content}"
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-6 relative z-10 transition-all duration-500"
                  style={{
                    background: isHovered
                      ? `linear-gradient(90deg, transparent, ${testimonial.color}, transparent)`
                      : "rgba(255, 255, 255, 0.1)",
                  }}
                ></div>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className="rounded-full flex items-center justify-center font-bold transition-all duration-500 relative overflow-hidden"
                    style={{
                      width: 56,
                      height: 56,
                      background: isHovered
                        ? `linear-gradient(135deg, ${testimonial.color}30, ${testimonial.color}10)`
                        : `${testimonial.color}15`,
                      color: testimonial.color,
                      fontSize: "1.25rem",
                      border: `2px solid ${
                        isHovered ? testimonial.color + "40" : "transparent"
                      }`,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${testimonial.color}20, transparent)`,
                      }}
                    ></div>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-1 transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? testimonial.color
                          : "var(--foreground)",
                        fontSize: "1.0625rem",
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${testimonial.color}08, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className="inline-block p-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Want to work together?
            </p>
            <p
              className="font-semibold"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let's create something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
