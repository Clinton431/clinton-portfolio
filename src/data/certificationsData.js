import React from "react";
import { Cloud, Code, Shield, Database, Layers } from "lucide-react";

export const certificationsData = [
  {
    name: "AWS Cloud Practitioner",
    status: "In Progress",
    icon: <Cloud size={20} />,
    issuer: "Amazon Web Services",
    expectedDate: "January 2025",
  },
  {
    name: "Full Stack Web Development",
    status: "Completed",
    icon: <Layers size={20} />,
    issuer: "ALX Africa",
    date: "August 2025",
    link: "#",
  },
  {
    name: "Python for Data Science and ML",
    status: "Completed",
    icon: <Code size={20} />,
    issuer: "Coursera",
    date: "April 2025",
    link: "#", // Add your certificate link
  },
  {
    name: "Responsive Web Design",
    status: "Completed",
    icon: <Code size={20} />,
    issuer: "freeCodeCamp",
    date: "November 2024",
    link: "#",
  },
  {
    name: "Cyber Security - CISCO",
    status: "Completed",
    icon: <Shield size={20} />,
    issuer: "Cisco Networking Academy",
    date: "August 2024",
    link: "#",
  },
  {
    name: "Database Administration",
    status: "Completed",
    icon: <Database size={20} />,
    issuer: "Oracle Academy",
    date: "July 2024",
    link: "#",
  },
  {
    name: "Linux System Administration",
    status: "Completed",
    icon: <Code size={20} />,
    issuer: "Linux Foundation",
    date: "October 2024",
    link: "#",
  },
];
