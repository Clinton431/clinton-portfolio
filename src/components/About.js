import React from "react";
import { Phone, MapPin, Calendar, Briefcase, Award, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="mx-auto relative z-10" style={{ maxWidth: 1200 }}>
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }}
          ></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <Code className="text-white" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  My Journey
                </h3>
              </div>

              <p
                className="mb-4 leading-relaxed"
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.75",
                }}
              >
                I'm a detail-oriented Software Engineering graduate with
                hands-on experience in full-stack development and process
                automation. My journey has taken me through developing
                healthcare information systems at the Ministry of Health, where
                I improved data management and reduced manual workloads
                significantly.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.75",
                }}
              >
                I thrive in collaborative environments and have a proven track
                record of delivering projects ahead of schedule. My passion lies
                in creating efficient, user-friendly solutions that make a real
                impact.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: "rgba(102, 126, 234, 0.1)" }}
                  >
                    <Phone size={20} style={{ color: "#667eea" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium"
                      style={{
                        color: "var(--muted-foreground)",
                        marginBottom: 2,
                      }}
                    >
                      Phone
                    </p>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      +254 112-464407
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: "rgba(118, 75, 162, 0.1)" }}
                  >
                    <MapPin size={20} style={{ color: "#764ba2" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium"
                      style={{
                        color: "var(--muted-foreground)",
                        marginBottom: 2,
                      }}
                    >
                      Location
                    </p>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <Award className="text-white" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {/* Education Item 1 */}
                <div
                  className="relative pl-6 pb-6 border-l-2"
                  style={{ borderColor: "rgba(102, 126, 234, 0.3)" }}
                >
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  ></div>
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: "#667eea" }}
                  >
                    Software Engineering Certification
                  </h4>
                  <p
                    className="font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    ALX University, Nairobi
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <Calendar size={16} />
                    <span>Graduated: Jul 2025</span>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: "rgba(102, 126, 234, 0.3)" }}
                >
                  <div
                    className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  ></div>
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: "#667eea" }}
                  >
                    Bachelor of Science in Information Technology
                  </h4>
                  <p
                    className="font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Murang'a University Of Technology
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <Calendar size={16} />
                    <span>Graduated: August 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div
              className="p-6 rounded-xl backdrop-blur-sm border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    2+
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Years Experience
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    15+
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Projects Done
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
