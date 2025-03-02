"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/navigation";

const uiDesigns = [
  {
    title: "Nimble: Here to Connect",
    description: "Welcome to Nimble, your premier destination for all Internet and web-related solutions.",
    image: "/img-2.png",
    link: "https://www.figma.com/design/W6wTGvlaKf1dDAho9paPyT/CONNECT?node-id=1%3A2&t=nSnGqiqlV2rmNMYt-1",
  },
  {
    title: "Blade and Banter - Men’s Hair Salon",
    description: "Blade and Banter is a modern hair salon designed exclusively for men, where precision meets style, and conversations flow as smoothly as our razors.",
    image: "/img-3.png",
    link: "https://www.figma.com/design/5Wt6jMZ6DDQnzZQSb7J3Zr/Untitled?node-id=0-1&t=lOFX0FpCVkg7t1pU-1",
  },
  {
    title: "Logistics Delivery Service Website",
    description: "A user-friendly, visually appealing design highlighting the company's services.",
    image: "/img-4.png",
    link: "#",
  },
  {
    title: "Heed The Call : Travel Agency",
    description: "Expertly crafted itineraries catering to every traveler's dream.",
    image: "/img-1.png",
    link: "https://www.figma.com/design/25ezN9bo6GJe8vm0wqGZ64/Heed-the-call?node-id=0-1&t=jHKcHlaE49fn7TIA-1",
  },
];

const websites = [
  {
    title: "Vendo Sonic Flex",
    image: "/web-3.png",
    link: "https://darkorchid-boar-679149.hostingersite.com/",
  },
  {
    title: "My Loving Day Landing Page",
    image: "/web-1.png",
    link: "https://chocolate-antelope-760505.hostingersite.com/",
  },
  {
    title: "Thrift Fest",
    image: "/web-2.png",
    link: "https://coral-rhinoceros-424440.hostingersite.com/",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* UI Designs Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold md:text-4xl text-center"
        >
          UI Designs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uiDesigns.map((design, index) => (
            <motion.a
              key={design.title}
              href={design.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black/80"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <div>
                  <h3 className="text-lg font-semibold flex items-center">
                    {design.title}
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-white/80">{design.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Websites Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 mb-8 text-3xl font-bold md:text-4xl text-center"
        >
          Websites
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {websites.map((site, index) => (
            <motion.a
              key={site.title}
              href={site.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black/80"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <div>
                  <h3 className="text-lg font-semibold flex items-center">
                    {site.title}
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Navigation (Always Visible) */}
      <div className="sticky bottom-0 w-full bg-background">
        <Navigation />
      </div>
    </main>
  );
}
