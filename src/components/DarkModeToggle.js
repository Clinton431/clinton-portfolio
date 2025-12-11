import React from "react";

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-md hover:opacity-90 transition z-50"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
