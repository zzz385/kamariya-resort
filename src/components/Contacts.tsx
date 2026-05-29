"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageSquare, Heart, MapPin, ExternalLink } from "lucide-react";
import Instagram from "@/components/icons/Instagram";
import Image from "next/image";

export const Contacts: React.FC = () => {
  const { t, language } = useLanguage();

  const getWhatsAppLink = (phone: string) => {
    let message = "";
    if (language === "ru") {
      message = "Здравствуйте! Я хочу уточнить информацию о бронировании номеров в Kamariya Resort.";
    } else if (language === "kk") {
      message = "Сәлеметсіз бе! Мен Kamariya Resort демалыс орнында бөлме брондау туралы ақпаратты білгім келеді.";
    } else {
      message = "Hello! I would like to inquire about booking a room at Kamariya Resort.";
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const instagramUrl = "https://www.instagram.com/alakol_kamariya/";

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-sunset-500" />,
      title: t("nav.contacts"),
      value1: "+7 (776) 136-45-73",
      link1: "tel:+77761364573",
      value2: "+7 (707) 351-08-14",
      link2: "tel:+77073510814",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-sunset-500" />,
      title: "WhatsApp",
      value1: t("contacts.whatsapp") + " (776)",
      link1: getWhatsAppLink("77761364573"),
      value2: t("contacts.whatsapp") + " (707)",
      link2: getWhatsAppLink("77073510814"),
    },
    {
      icon: <Instagram className="w-6 h-6 text-sunset-500" />,
      title: "Instagram",
      value1: t("contacts.insta"),
      link1: instagramUrl,
    },
  ];

  // Grid for instagram feed preview
  const instagramFeedMock = [
    { src: "/images/lake-hero.jpg", likes: 248 },
    { src: "/images/room-wood-1.jpg", likes: 182 },
    { src: "/images/dining.jpg", likes: 310 },
    { src: "/images/room-family-living.jpg", likes: 295 },
  ];

  return (
    <section
      id="contacts"
      className="relative w-full py-24 bg-sand-50 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3 block">
            {t("nav.contacts")}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase">
            {t("contacts.title")}
          </h2>
          <div className="w-16 h-[2px] bg-sunset-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-ocean-900/60 font-light max-w-xl mx-auto">
            {t("contacts.subtitle")}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glassmorphism-card rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:bg-white/80 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-sand-100 mb-6 group-hover:scale-110 group-hover:bg-sunset-100/30 transition-all duration-300 flex items-center justify-center">
                {method.icon}
              </div>

              <h3 className="font-display font-semibold text-base sm:text-lg text-ocean-950 uppercase tracking-wider mb-4">
                {method.title}
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-ocean-900/70 font-light">
                <a
                  href={method.link1}
                  target={method.title !== t("nav.contacts") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-sunset-500 font-medium transition-colors flex items-center justify-center space-x-1"
                >
                  <span>{method.value1}</span>
                  {method.title !== t("nav.contacts") && <ExternalLink size={12} className="opacity-45" />}
                </a>

                {method.value2 && (
                  <a
                    href={method.link2}
                    target={method.title !== t("nav.contacts") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-sunset-500 font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>{method.value2}</span>
                    {method.title !== t("nav.contacts") && <ExternalLink size={12} className="opacity-45" />}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Mock Feed Preview */}
        <div className="max-w-4xl mx-auto rounded-3xl glassmorphism border border-white/60 p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 text-center sm:text-left gap-4">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-ocean-950 uppercase tracking-wide">
                {t("contacts.instaFeed")}
              </h3>
              <p className="text-xs sm:text-sm text-ocean-900/50 font-light mt-1">
                {t("contacts.instaFeedSub")}
              </p>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-sunset-500 text-sunset-500 hover:bg-sunset-500 hover:text-white transition-all flex items-center space-x-2 flex-shrink-0"
            >
              <Instagram size={14} />
              <span>{t("contacts.instagram")}</span>
            </a>
          </div>

          {/* Grid Mock of Instagram Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramFeedMock.map((post, idx) => (
              <a
                key={idx}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
              >
                <Image
                  src={post.src}
                  alt="Kamariya Resort Instagram Feed Post"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-4xl) 25vw, 100vw"
                  loading="lazy"
                />
                {/* Heart overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white z-10 pointer-events-none">
                  <div className="flex items-center space-x-1.5 text-sm font-semibold">
                    <Heart size={16} className="fill-white" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DUAL FLOATING CTAS - BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col space-y-3 pointer-events-none">
        {/* Floating Instagram widget */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-4 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e1306c] to-[#bc1888] text-white shadow-xl shadow-pink-500/10 hover:shadow-pink-500/25 active:scale-95 transition-all duration-300 group relative"
          title={t("contacts.instagram")}
        >
          <Instagram size={22} className="group-hover:rotate-6 transition-transform" />
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-ocean-950 text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap border border-white/10">
            Instagram
          </span>
        </motion.a>

        {/* Floating WhatsApp widget */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          href={getWhatsAppLink("77761364573")}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-4 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/15 hover:shadow-green-500/30 active:scale-95 transition-all duration-300 group relative"
          title={t("hero.btnWhatsApp")}
        >
          <MessageSquare size={22} className="group-hover:rotate-6 transition-transform fill-white" />
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-ocean-950 text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap border border-white/10">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contacts;
