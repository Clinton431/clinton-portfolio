import React from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title:
        "Building a Hotel & Restaurant Management System with the MERN Stack",
      excerpt:
        "How I built a full-stack booking and management platform with room/table reservations, order management, and real-time inventory tracking.",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Development",
      link: "https://mern-blog-app-teal.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1679731980192-a18d8bbb47d8?w=800&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1608742213509-815b97c30b36?w=800&h=400&fit=crop",
    },
    {
      title:
        "Algorithms in Practice: Search, Sort, and Computational Optimization",
      excerpt:
        "Working through classic search and sorting algorithms alongside optimization techniques like gradient descent, genetic algorithms, and simulated annealing.",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      category: "Algorithms",
      link: "https://mern-blog-app-teal.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 px-6" id="blog">
      <div className="mx-auto" style={{ maxWidth: 1152 }}>
        <div className="text-center mb-10">
          <h2
            className="font-bold mb-3"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
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
              fontSize: "1rem",
            }}
          >
            Sharing knowledge and experiences from my developer journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="rounded-lg overflow-hidden transition-all hover:scale-[1.015] hover:shadow-lg group"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Image with overlay */}
              <div className="relative h-40 overflow-hidden">
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
                    size={48}
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
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "var(--primary)",
                  }}
                >
                  {article.category}
                </span>
              </div>

              <div className="p-5">
                {/* Title */}
                <h3
                  className="font-bold mb-2 leading-tight"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "1.1rem",
                  }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="mb-3 leading-relaxed"
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.875rem",
                  }}
                >
                  {article.excerpt}
                </p>

                {/* Meta info */}
                <div
                  className="flex items-center gap-3 mb-3 text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-1.5 font-medium text-sm transition-all group-hover:gap-2.5"
                  style={{ color: "var(--primary)" }}
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <a
            href="https://mern-blog-app-teal.vercel.app/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 transition-all hover:scale-105"
            style={{
              borderColor: "var(--primary)",
              color: "var(--foreground)",
            }}
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
