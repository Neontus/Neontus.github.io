"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const THEME_STORAGE_KEY = "theme";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // next-themes bug: first setTheme() only writes to localStorage and doesn't
  // apply the class when defaultTheme is "system" and storage is empty.
  // Prime storage on first load so the first user click applies correctly.
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    if (window.localStorage.getItem(THEME_STORAGE_KEY) != null) return;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, [mounted, setTheme]);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const btn = buttonRef.current;
    if (!btn) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Start view transition if supported
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(isDark ? "light" : "dark");
      });
    } else {
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
