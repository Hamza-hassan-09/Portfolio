"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen items-center justify-center px-4 md:px-8">
        <div className="grid max-w-6xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
              Hello👋I’m Hamza, an{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Web Developer and Designer
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              I’m a front-end developer and UI/UX designer with expertise in web development and brand development. I create engaging user experiences and scalable digital solutions, blending technical skills with creative marketing to enhance brand visibility.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Let's Talk</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 p-8"
          >
            <img
             src="/hamza-img.png"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <Navigation />
    </main>
  );
}