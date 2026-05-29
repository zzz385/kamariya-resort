"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), id: "#home" },
    { name: t("nav.rooms"), id: "#rooms" },
    { name: t("nav.pricing"), id: "#pricing" },
    { name: t("nav.gallery"), id: "#gallery" },
    { name: t("nav.contacts"), id: "#contacts" },
  ];

  const languages = [
    { code: "ru", name: "Русский" },
    { code: "kk", name: "Қазақша" },
    { code: "en", name: "English" },
  ] as const;

  const currentLangLabel = languages.find((l) => l.code === language)?.name || "Русский";

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-ocean-950/80 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex flex-col select-none group"
          >
            <span className="font-display font-bold text-xl md:text-2xl tracking-[0.2em] text-sand-100 group-hover:text-sunset-500 transition-colors">
              KAMARIYA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-sand-300/80 uppercase font-light -mt-1 group-hover:text-sand-100 transition-colors">
              RESORT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="relative font-light text-sm text-sand-200 tracking-wider hover:text-sand-50 transition-colors py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sunset-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side Tools (Language Switcher, Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher Dropdown (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs tracking-wider text-sand-100 uppercase"
              >
                <Globe size={13} className="text-sunset-500" />
                <span>{language}</span>
                <ChevronDown size={12} className={`opacity-60 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    {/* Overlay to close on click outside */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLangDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-36 z-20 overflow-hidden rounded-xl border border-white/10 bg-ocean-950/95 backdrop-blur-xl shadow-2xl p-1"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                            language === lang.code
                              ? "bg-sunset-500 text-white font-medium"
                              : "text-sand-200 hover:bg-white/5"
                          }`}
                        >
                          <span>{lang.name}</span>
                          {language === lang.code && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-white/10 bg-white/5 text-sand-100 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 top-0 z-30 bg-ocean-950/95 backdrop-blur-2xl flex flex-col justify-center px-8 border-b border-white/10"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                >
                  <a
                    href={item.id}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className="font-display font-light text-2xl tracking-[0.1em] text-sand-200 hover:text-sunset-500 transition-colors py-2 block"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}

              {/* Language selection in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-white/10 flex justify-center space-x-4"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full border text-xs tracking-wider uppercase transition-all ${
                      language === lang.code
                        ? "bg-sunset-500 border-sunset-500 text-white shadow-md shadow-sunset-500/20"
                        : "border-white/10 text-sand-300 hover:bg-white/5"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
