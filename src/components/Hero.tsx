"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, ArrowDown, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // subtle cinematic slow-motion
    }
  }, []);

  const handleScrollToRooms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#rooms");
    if (element) {
      const offset = 80;
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

  // Prefilled WhatsApp booking message depending on selected language
  const getWhatsAppLink = () => {
    const phone = "77761364573";
    let message = "";
    if (language === "ru") {
      message = "Здравствуйте! Я хочу забронировать номер в зоне отдыха Kamariya Resort. Подскажите, пожалуйста, наличие свободных мест.";
    } else if (language === "kk") {
      message = "Сәлеметсіз бе! Мен Kamariya Resort демалыс орнынан бөлме брондағым келеді. Бос бөлмелер бар ма екенін біле алмаймын ба?";
    } else {
      message = "Hello! I would like to book a room at Kamariya Resort. Could you please check availability for me?";
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-ocean-950"
    >
      {/* Looping Ambient Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-65 transform scale-105"
        style={{ filter: "brightness(0.7) contrast(1.15)" }}
      >
        <source
          src="/videos/alakol-hero.mp4"
          type="video/mp4"
        />
        {/* If video fails to load, the background displays the sunset image */}
      </video>

      {/* Static sunset background image fallback in case video is blocked or loading */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 opacity-70"
        style={{ backgroundImage: "url('/images/lake-hero.jpg')" }}
      />

      {/* Luxury Cinematic Vignette & Readability Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-ocean-950/50 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/40 via-transparent to-ocean-950/40 z-10 pointer-events-none" />

      {/* Floating particles background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,251,247,0.03),transparent)] z-10 pointer-events-none" />

      {/* Hero Interactive Main Card */}
      <div className="relative max-w-5xl mx-auto px-6 z-20 text-center flex flex-col items-center">
        {/* Subtle Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sand-200 text-xs md:text-sm uppercase tracking-[0.25em] mb-8"
        >
          <MapPin size={14} className="text-sunset-500 animate-pulse" />
          <span>{t("hero.location")}</span>
        </motion.div>

        {/* Big Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] text-sand-50 uppercase leading-none mb-6 drop-shadow-sm select-none"
        >
          KAMARIYA
        </motion.h1>

        {/* Elegant descriptive sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="font-light text-base sm:text-2xl text-sand-200/90 tracking-[0.12em] mb-12 max-w-2xl leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Actions Button Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Main CTA "Watch Rooms" */}
          <a
            href="#rooms"
            onClick={handleScrollToRooms}
            className="w-full sm:w-60 px-8 py-4 rounded-full text-center text-sm font-semibold tracking-wider uppercase transition-all duration-300 bg-sand-100 text-ocean-950 shadow-xl shadow-black/10 hover:bg-sunset-500 hover:text-white hover:shadow-sunset-500/20 active:scale-[0.98]"
          >
            {t("hero.btnRooms")}
          </a>

          {/* Secondary CTA "WhatsApp" */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-60 px-8 py-4 rounded-full text-center text-sm font-semibold tracking-wider uppercase transition-all duration-300 border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/35 active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            <MessageSquare size={16} className="text-sunset-500" />
            <span>{t("hero.btnWhatsApp")}</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-none text-sand-300"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-light mb-2">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md"
        >
          <ArrowDown size={14} className="text-sunset-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
