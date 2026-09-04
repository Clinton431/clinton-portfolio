import React, { useState } from "react";
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTABanner() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-16 px-6">
        <div
          className="mx-auto rounded-3xl p-10 md:p-12 text-center relative overflow-hidden"
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
              className="font-bold mb-3 text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              }}
            >
              Let's Work Together
            </h2>

            <p
              className="mb-6 text-white opacity-90"
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
                maxWidth: 640,
                margin: "0 auto 1.5rem",
              }}
            >
              I'm currently available for freelance projects and full-time
              opportunities. Let's bring your ideas to life!
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "white",
                  color: "var(--primary)",
                }}
              >
                <Mail size={18} />
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://www.linkedin.com/in/clinton-nyakoe-00953b270/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm border-2 transition-all hover:scale-105 hover:bg-white hover:bg-opacity-10"
                style={{
                  borderColor: "white",
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="https://x.com/ClintonNyakoe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm border-2 transition-all hover:scale-105 hover:bg-white hover:bg-opacity-10"
                style={{
                  borderColor: "white",
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <Twitter size={18} />
                <span>Follow on X</span>
              </a>
            </div>

            <p className="mt-6 text-white opacity-75 text-sm">
              Response time: Usually within 24 hours - clintonnyakoe@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
