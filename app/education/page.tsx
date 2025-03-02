"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import Navigation from "@/components/navigation";

const education = [
  {
    degree: "Master’s in Computer Science",
    institution: "Sir Syed University of Engineering and Technology",
    year: "2024 - Present",
    description: "Currently pursuing a Master's degree focused on advanced Crytography & Cyber Security",
  },
  {
    degree: "Bachelor’s Computer Science",
    institution: "Sir Syed University of Engineering and Technology",
    year: "2020 - 2024",
    description: "Graduated in Computer Sceince, specializing in web development, user experience, and Project Management.",
  },
  {
    degree: "High School/Collage",
    institution: "Bahria College Karzas",
    year: "2017 - 2019",
    description: "Completed high school with a focus on mathematics and computer science.",
  },
];

const certifications = [
  {
    title: "Certified Frontend Developer",
    issuer: "Google",
    year: "2022",
    description: "Achieved a certification in frontend development, covering React, Next.js, and UI/UX best practices.",
  },
  {
    title: "Advanced UX Design",
    issuer: "Coursera",
    year: "2023",
    description: "Completed an intensive UX/UI design course, focusing on user research, wireframing, and prototyping.",
  },
];

const sections = [
  {
    title: "Education",
    content: (
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold md:text-4xl"
        >
          Education
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl bg-muted p-6"
            >
              <Book className="mb-4 h-6 w-6 text-primary/40" />
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {edu.institution} • {edu.year}
              </p>
              <p className="mt-2 text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    content: (
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold md:text-4xl"
        >
          Certifications
        </motion.h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-muted p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.issuer} • {cert.year}</p>
              <p className="mt-2 text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function EducationPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative h-screen overflow-hidden bg-background text-foreground">
      <div
        ref={containerRef}
        className="flex h-screen snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="flex h-screen w-screen flex-none snap-center items-center justify-center px-4 md:px-8"
          >
            {section.content}
          </div>
        ))}
      </div>
      <Navigation />
    </main>
  );
}
