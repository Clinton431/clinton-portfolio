import React from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 px-6">
      <div
        className="mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        style={{
          maxWidth: 1152,
          background:
            "linear-gradient(135deg, var(--primary), var(--secondary))",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, white, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, white, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative z-10">
          <h2
            className="font-bold mb-4 text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Let's Work Together
          </h2>

          <p
            className="mb-8 text-white opacity-90"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: 768,
              margin: "0 auto 2rem",
            }}
          >
            I'm currently available for freelance projects and full-time
            opportunities. Let's create something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:clintonnyakoe@gmail.com"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-all hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: "white",
                color: "var(--primary)",
              }}
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
              <ArrowRight size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/clinton-nyakoe-00953b270/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium border-2 transition-all hover:scale-105 hover:bg-white hover:bg-opacity-10"
              style={{
                borderColor: "white",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <p className="mt-8 text-white opacity-75 text-sm">
            Response time: Usually within 24 hours - clintonnyakoe@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
