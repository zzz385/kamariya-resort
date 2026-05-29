"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Wind, Tv, ShowerHead, Bed, Shirt, MessageSquare, Users, Sparkles, Flame } from "lucide-react";
import Image from "next/image";

export const Rooms: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prefilled WhatsApp booking messages for specific room types
  const getWhatsAppLink = (roomType: "triple" | "cottage") => {
    const phone = "77761364573";
    let message = "";
    if (language === "ru") {
      message = roomType === "triple"
        ? "Здравствуйте! Я хочу забронировать трехместный деревянный номер в зоне отдыха Kamariya Resort."
        : "Здравствуйте! Я хочу забронировать семейный двухэтажный коттедж в зоне отдыха Kamariya Resort.";
    } else if (language === "kk") {
      message = roomType === "triple"
        ? "Сәлеметсіз бе! Мен Kamariya Resort демалыс орнынан үш кісілік ағаш бөлме брондағым келеді."
        : "Сәлеметсіз бе! Мен Kamariya Resort демалыс орнынан отбасылық екі қабатты коттедж брондағым келеді.";
    } else {
      message = roomType === "triple"
        ? "Hello! I would like to book a Wooden Triple Room at Kamariya Resort."
        : "Hello! I would like to book a Family Two-Story Cottage at Kamariya Resort.";
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const tripleRoomAmenities = [
    { icon: <Wind className="w-4 h-4" />, text: t("rooms.room1.a1") },
    { icon: <Tv className="w-4 h-4" />, text: t("rooms.room1.a2") },
    { icon: <Sparkles className="w-4 h-4 text-sunset-500" />, text: t("rooms.room1.a3") },
    { icon: <ShowerHead className="w-4 h-4" />, text: t("rooms.room1.a4") },
    { icon: <Shirt className="w-4 h-4" />, text: t("rooms.room1.a5") },
    { icon: <Bed className="w-4 h-4" />, text: t("rooms.room1.a6") },
  ];

  const familyCottageAmenities = [
    { icon: <Bed className="w-4 h-4" />, text: t("rooms.room2.a1") },
    { icon: <Wind className="w-4 h-4" />, text: t("rooms.room2.a2") },
    { icon: <Tv className="w-4 h-4" />, text: t("rooms.room2.a3") },
    { icon: <ShowerHead className="w-4 h-4" />, text: t("rooms.room2.a4") },
    { icon: <Shirt className="w-4 h-4" />, text: t("rooms.room2.a5") },
    { icon: <Sparkles className="w-4 h-4 text-sunset-500" />, text: t("rooms.room2.a6") },
    { icon: <Flame className="w-4 h-4 text-sunset-500" />, text: t("rooms.room2.a7") },
  ];

  return (
    <section
      id="rooms"
      className="relative w-full py-24 bg-sand-50 flex flex-col items-center overflow-hidden"
    >
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 rounded-full bg-sand-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 rounded-full bg-sunset-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3 block">
            {t("nav.rooms")}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase">
            {t("rooms.title")}
          </h2>
          <div className="w-16 h-[2px] bg-sunset-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-ocean-900/60 font-light max-w-xl mx-auto">
            {t("rooms.subtitle")}
          </p>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Card 1: Wooden Triple Rooms */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col rounded-3xl overflow-hidden glassmorphism-card border border-white/50 bg-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500 group"
          >
            {/* Image Wrap */}
            <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
              <Image
                src="/images/territory-wooden-house.jpg"
                alt={t("rooms.room1.title")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-w-7xl) 50vw, 100vw"
                priority
              />
              {/* Overlay styling for warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

              {/* Top indicators */}
              <div className="absolute top-6 left-6 z-20 flex items-center space-x-2">
                <span className="flex items-center space-x-1 text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-ocean-950/85 backdrop-blur-md text-sand-100 px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <Users size={12} className="text-sunset-500" />
                  <span>
                    3 {t("rooms.capacity.guests")}
                  </span>
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-sunset-500 text-white px-3 py-1.5 rounded-full shadow-lg">
                  COZY WOOD
                </span>
              </div>
            </div>

            {/* Room Details Block */}
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="grid grid-cols-2 gap-2 p-3 bg-white">
                <div className="relative h-24 rounded-xl overflow-hidden cursor-pointer group/thumb">
                  <Image
                    src="/images/room-wood-1.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-wood-1.jpg")}
                  />
                </div>

                <div className="relative h-24 rounded-xl overflow-hidden cursor-pointer group/thumb">
                  <Image
                    src="/images/room-wood-2.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-wood-2.jpg")}
                  />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ocean-950 tracking-wide uppercase mb-4">
                {t("rooms.room1.title")}
              </h3>
              <p className="text-sm sm:text-base text-ocean-900/60 leading-relaxed font-light mb-8 flex-grow">
                {t("rooms.room1.desc")}
              </p>

              {/* Amenities Grid */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-sunset-500 font-semibold mb-4">
                  {t("rooms.amenities")}
                </h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {tripleRoomAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-ocean-900/80 font-light">
                      <span className="flex-shrink-0 text-sunset-500 p-1.5 rounded-lg bg-sand-100 group-hover:bg-white transition-colors">
                        {amenity.icon}
                      </span>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink("triple")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full text-center text-xs sm:text-sm font-semibold tracking-wider uppercase bg-ocean-950 text-white shadow-lg transition-all duration-300 hover:bg-sunset-500 hover:shadow-sunset-500/20 active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>{t("rooms.bookBtn")}</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Family Houses */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col rounded-3xl overflow-hidden glassmorphism-card border border-white/50 bg-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500 group"
          >
            {/* Image Wrap */}
            <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
              <Image
                src="/images/territory-white-house.jpg"
                alt={t("rooms.room2.title")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-w-7xl) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

              {/* Top indicators */}
              <div className="absolute top-6 left-6 z-20 flex items-center space-x-2">
                <span className="flex items-center space-x-1 text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-ocean-950/85 backdrop-blur-md text-sand-100 px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <Users size={12} className="text-sunset-500" />
                  <span>
                    7–9 {t("rooms.capacity.guests")}
                  </span>
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-sunset-500 text-white px-3 py-1.5 rounded-full shadow-lg">
                  LUXURY CABIN
                </span>
              </div>
            </div>

            {/* Room Details Block */}
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="grid grid-cols-3 gap-2 p-3 bg-white">
                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-bedroom-1.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-bedroom-1.jpg")}
                  />
                </div>

                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-bedroom-2.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-bedroom-2.jpg")}
                  />
                </div>

                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-bedroom-3.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-bedroom-3.jpg")}
                  />
                </div>

                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-living.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-living.jpg")}
                  />
                </div>

                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-bathroom.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-bathroom.jpg")}
                  />
                </div>

                <div className="relative h-20 rounded-xl overflow-hidden">
                  <Image
                    src="/images/room-family-hallway.jpg"
                    alt=""
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage("/images/room-family-hallway.jpg")}
                  />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ocean-950 tracking-wide uppercase mb-4">
                {t("rooms.room2.title")}
              </h3>
              <p className="text-sm sm:text-base text-ocean-900/60 leading-relaxed font-light mb-8 flex-grow">
                {t("rooms.room2.desc")}
              </p>

              {/* Amenities Grid */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-sunset-500 font-semibold mb-4">
                  {t("rooms.amenities")}
                </h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {familyCottageAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-ocean-900/80 font-light">
                      <span className="flex-shrink-0 text-sunset-500 p-1.5 rounded-lg bg-sand-100 group-hover:bg-white transition-colors">
                        {amenity.icon}
                      </span>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink("cottage")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full text-center text-xs sm:text-sm font-semibold tracking-wider uppercase bg-ocean-950 text-white shadow-lg transition-all duration-300 hover:bg-sunset-500 hover:shadow-sunset-500/20 active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>{t("rooms.bookBtn")}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;
