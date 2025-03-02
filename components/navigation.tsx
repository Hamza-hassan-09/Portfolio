"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, Briefcase, Star, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Education", href: "/education", icon: Star },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      <motion.div
        className="flex items-center gap-2 rounded-full bg-black/80 px-6 py-3 backdrop-blur-sm dark:bg-white/20 md:px-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "relative flex flex-col items-center px-4 py-2 text-xs font-medium text-white transition-colors hover:text-white/60 md:text-sm",
              pathname === item.href && "text-white"
            )}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <item.icon className="h-5 w-5 md:hidden" /> {/* Mobile Icons */}
            <span className="relative z-10 hidden md:inline">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
