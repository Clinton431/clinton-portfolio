import React from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "Building Healthcare Systems: Lessons from the Ministry of Health",
      excerpt:
        "Key insights and challenges I encountered while developing the national healthcare information system.",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Development",
      link: "https://mern-blog-app-teal.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    },
    {
      title: "Automating Daily Tasks with Python and Bash",
      excerpt:
        "How I reduced manual workload by 25% using automation scripts and cron jobs.",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      category: "Automation",
      link: "https://mern-blog-app-teal.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    },
    {
      title: "My Journey from Student to Software Developer",
      excerpt:
        "The path I took to become a full-stack developer, including challenges and breakthroughs.",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      category: "Career",
      link: "https://mern-blog-app-teal.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop", // Career/teamwork
    },
  ];

  return (
    <section className="py-20 px-6" id="blog">
      <div className="mx-auto" style={{ maxWidth: 1152 }}>
        <div className="text-center mb-12">
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
            Latest Articles & Blogs
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.125rem",
            }}
          >
            Sharing knowledge and experiences from my developer journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl group"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback gradient */}
                <div
                  className="hidden absolute inset-0 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary), var(--secondary))",
                  }}
                >
                  <BookOpen
                    size={64}
                    style={{ color: "white", opacity: 0.8 }}
                  />
                </div>

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  }}
                />

                {/* Category badge on image */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "var(--primary)",
                  }}
                >
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3
                  className="font-bold mb-3 leading-tight"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "1.25rem",
                  }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="mb-4 leading-relaxed"
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.95rem",
                  }}
                >
                  {article.excerpt}
                </p>

                {/* Meta info */}
                <div
                  className="flex items-center gap-4 mb-4 text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 font-medium transition-all group-hover:gap-3"
                  style={{ color: "var(--primary)" }}
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="https://mern-blog-app-teal.vercel.app/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            View All Articles
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
