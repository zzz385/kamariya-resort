"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, UtensilsCrossed, Trees, Bed, Waves } from "lucide-react";
import WaveBackground from "./WaveBackground";

export const About: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Heart className="w-8 h-8 text-sunset-500" />,
      title: t("about.card1.title"),
      desc: t("about.card1.desc"),
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-sunset-500" />,
      title: t("about.card2.title"),
      desc: t("about.card2.desc"),
    },
    {
      icon: <Trees className="w-8 h-8 text-sunset-500" />,
      title: t("about.card3.title"),
      desc: t("about.card3.desc"),
    },
    {
      icon: <Bed className="w-8 h-8 text-sunset-500" />,
      title: t("about.card4.title"),
      desc: t("about.card4.desc"),
    },
    {
      icon: <Waves className="w-8 h-8 text-sunset-500" />,
      title: t("about.card5.title"),
      desc: t("about.card5.desc"),
    },
  ];

  // Container variants for staggered animation on scroll
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-sand-100/50 flex flex-col items-center overflow-hidden"
    >
      {/* Decorative blurred orange background blob for sunset look */}
      <div className="absolute top-1/3 right-[-10%] w-96 h-96 rounded-full bg-sunset-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-80 h-80 rounded-full bg-ocean-700/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3"
          >
            {t("about.subtitle")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase"
          >
            {t("about.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[2px] bg-sunset-500 mx-auto"
          />
        </div>

        {/* Brand Text Paragraphs (Premium double-column layout on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20 text-ocean-900/80 leading-relaxed font-light text-sm sm:text-base md:text-lg">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-justify"
          >
            {t("about.desc1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-justify"
          >
            {t("about.desc2")}
          </motion.p>
        </div>

        {/* Feature Cards Grid (5-column elegant layout responsive) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`glassmorphism-card rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 group hover:bg-white/80 hover:shadow-xl hover:shadow-sand-600/5 ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""
              }`}
            >
              {/* Icon Container with subtle zoom on hover */}
              <div className="p-4 rounded-2xl bg-sand-50 border border-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sunset-100/30 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-display font-semibold text-base sm:text-lg tracking-wider text-ocean-950 mb-3 uppercase">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-ocean-900/60 leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Wave Separator */}
      <WaveBackground className="absolute bottom-0 left-0 right-0" color="text-sand-50" />
    </section>
  );
};

export default About;
