"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { AiFillBehanceCircle } from "react-icons/ai";
import Navigation from "@/components/navigation";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/syed-hamza-hassan-0a9709221/" },
  { name: "Behance", icon: AiFillBehanceCircle, href: "https://www.behance.net/syedhamzahassan" },
  { name: "Email", icon: Mail, href: "mailto:syedhamzahassan09@gmail.com" },
];

export default function ContactPage() {
  return (
    <main className="relative h-screen overflow-hidden bg-background text-foreground">
      <div className="flex h-screen snap-x snap-mandatory overflow-x-auto">
        <div className="flex h-screen w-screen flex-none snap-center items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Let's Connect</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Feel free to reach out via email or connect on social platforms.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="mt-6">
              <Button className="mt-4" asChild>
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Navigation />
    </main>
  );
}
