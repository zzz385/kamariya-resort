"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, Check, Coffee, Sparkles } from "lucide-react";
import WaveBackground from "./WaveBackground";

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="relative w-full py-24 bg-sand-100/50 flex flex-col items-center overflow-hidden"
    >
      {/* Dynamic atmospheric ambient gradients */}
      <div className="absolute top-1/3 left-[-15%] w-[500px] h-[500px] rounded-full bg-sunset-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-15%] w-[500px] h-[500px] rounded-full bg-ocean-700/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3 block">
            {t("nav.pricing")}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase">
            {t("pricing.title")}
          </h2>
          <div className="w-16 h-[2px] bg-sunset-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-ocean-900/60 font-light max-w-xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards Layout (Side by Side comparing seasons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Card 1: Shoulder Season */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col rounded-3xl overflow-hidden glassmorphism-card border border-white/50 bg-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 p-8 sm:p-10 group"
          >
            {/* Tag Badge */}
            <div className="absolute top-6 right-6 flex items-center space-x-1 text-[10px] uppercase tracking-wider font-semibold bg-sand-200 text-sand-800 px-3 py-1.5 rounded-full">
              <Sparkles size={11} className="text-sunset-500" />
              <span>{t("pricing.badge")}</span>
            </div>

            {/* Header */}
            <div className="mb-8 pt-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ocean-950 uppercase tracking-wide mb-2 group-hover:text-sunset-500 transition-colors">
                {t("pricing.season1.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ocean-900/50 font-light">
                {t("pricing.season1.subtitle")}
              </p>
            </div>

            {/* Main Pricing details */}
            <div className="space-y-6 flex-grow mb-8 border-y border-sand-200 py-6">
              {/* Adults Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-ocean-900 font-light">
                  {t("pricing.adults")}
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-ocean-950">
                    13 500
                  </span>
                  <span className="text-xs text-ocean-900/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>

              {/* Children Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-ocean-900 font-light flex items-center space-x-1">
                  <span>{t("pricing.kids")}</span>
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-ocean-950">
                    12 000
                  </span>
                  <span className="text-xs text-ocean-900/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>
            </div>

            {/* Features summary included in package */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-ocean-900/70 font-light">
                <Check size={16} className="text-sunset-500 mt-0.5 flex-shrink-0" />
                <span className="text-justify font-normal text-ocean-950">{t("about.card2.title")}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Peak Season (Highlighted Luxury Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col rounded-3xl overflow-hidden bg-ocean-950 border border-white/10 shadow-2xl p-8 sm:p-10 text-sand-100 group"
          >
            {/* Accent gold overlay */}
            <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-sunset-500 via-sand-300 to-sunset-500" />

            {/* Tag Badge */}
            <div className="absolute top-6 right-6 flex items-center space-x-1 text-[10px] uppercase tracking-wider font-semibold bg-sunset-500 text-white px-3 py-1.5 rounded-full shadow-md">
              <Sparkles size={11} className="text-white animate-pulse" />
              <span>{t("pricing.badge")}</span>
            </div>

            {/* Header */}
            <div className="mb-8 pt-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-sand-50 uppercase tracking-wide mb-2 group-hover:text-sunset-500 transition-colors">
                {t("pricing.season2.title")}
              </h3>
              <p className="text-xs sm:text-sm text-sand-300/60 font-light">
                {t("pricing.season2.subtitle")}
              </p>
            </div>

            {/* Main Pricing details */}
            <div className="space-y-6 flex-grow mb-8 border-y border-white/10 py-6">
              {/* Adults Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-sand-200 font-light">
                  {t("pricing.adults")}
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50">
                    18 000
                  </span>
                  <span className="text-xs text-sand-300/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>

              {/* Children Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-sand-200 font-light flex items-center space-x-1">
                  <span>{t("pricing.kids")}</span>
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50">
                    14 000
                  </span>
                  <span className="text-xs text-sand-300/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>
            </div>

            {/* Features summary included in package */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-sand-300 font-light">
                <Check size={16} className="text-sunset-500 mt-0.5 flex-shrink-0" />
                <span className="text-justify font-normal text-white">{t("about.card2.title")}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Shoulder Season */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col rounded-3xl overflow-hidden glassmorphism-card border border-white/50 bg-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 p-8 sm:p-10 group"
          >
            {/* Tag Badge */}
            <div className="absolute top-6 right-6 flex items-center space-x-1 text-[10px] uppercase tracking-wider font-semibold bg-sand-200 text-sand-800 px-3 py-1.5 rounded-full">
              <Sparkles size={11} className="text-sunset-500" />
              <span>{t("pricing.badge")}</span>
            </div>

            {/* Header */}
            <div className="mb-8 pt-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ocean-950 uppercase tracking-wide mb-2 group-hover:text-sunset-500 transition-colors">
                {t("pricing.season3.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ocean-900/50 font-light">
                {t("pricing.season3.subtitle")}
              </p>
            </div>

            {/* Main Pricing details */}
            <div className="space-y-6 flex-grow mb-8 border-y border-sand-200 py-6">
              {/* Adults Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-ocean-900 font-light">
                  {t("pricing.adults")}
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-ocean-950">
                    13 500
                  </span>
                  <span className="text-xs text-ocean-900/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>

              {/* Children Rate */}
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-ocean-900 font-light flex items-center space-x-1">
                  <span>{t("pricing.kids")}</span>
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-ocean-950">
                    12 000
                  </span>
                  <span className="text-xs text-ocean-900/60 uppercase font-light">
                    {t("pricing.currency")}
                  </span>
                </div>
              </div>
            </div>

            {/* Features summary included in package */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-ocean-900/70 font-light">
                <Check size={16} className="text-sunset-500 mt-0.5 flex-shrink-0" />
                <span className="text-justify font-normal text-ocean-950">{t("about.card2.title")}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing fine print details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto rounded-3xl glassmorphism border border-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 shadow-md"
        >
          <div className="p-3.5 rounded-2xl bg-sunset-100 text-sunset-500 flex-shrink-0">
            <Coffee size={24} />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h4 className="text-sm font-bold text-ocean-950 uppercase tracking-wider">
              {t("pricing.badge")}
            </h4>
            <p className="text-xs sm:text-sm text-ocean-900/70 leading-relaxed font-light">
              {t("pricing.meals.info")}
            </p>
            <p className="text-[11px] sm:text-xs text-sunset-600 font-medium tracking-wide">
              * {t("pricing.free")} {t("pricing.free.desc")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wave bottom visual separator */}
      <WaveBackground className="absolute bottom-0 left-0 right-0" color="text-sand-50" flip={true} />
    </section>
  );
};

export default Pricing;
