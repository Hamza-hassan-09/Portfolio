"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Navigation from "@/components/navigation";

const skills = [
  "UI Design",
  "UX Research",
  "Prototyping",
  "Figma",
  "Responsive Design",
  "Social Media Marketing",
  "NextJS",
  "Wordpress",
  "Custom Coding",
  "React",
  "Project Management",
  "Business Analyst"
];

const sections = [
  {
    title: "About Me",
    content: (
      <div className="grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mb-6 text-lg text-muted-foreground">
          With a perfect blend of technical expertise and creative marketing, I specialize in designing 
          engaging user experiences and scalable front-end solutions. I bring over a year of experience 
          in web development, UI/UX design, and brand development. Whether it’s crafting user-friendly 
          websites or enhancing brand visibility, I’m committed to delivering impactful digital solutions.
          </p>
          <Button className="w-fit" size="lg" variant="outline" asChild>
  <a href="/resume.pdf" download>
    <FileDown className="mr-2 h-4 w-4" />
    Download Resume
  </a>
</Button>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="mb-6 text-xl font-semibold">Skills & Expertise</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
  {skills.map((skill, index) => (
    <motion.div
      key={skill}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="rounded-lg bg-muted p-4 text-center font-medium transition-colors duration-300 hover:bg-[#ADDFFF] hover:text-black"
    >
      {skill}
    </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
];

export default function AboutPage() {
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