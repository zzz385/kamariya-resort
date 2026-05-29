"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Navigation, Compass } from "lucide-react";

export const Map: React.FC = () => {
  const { t } = useLanguage();

  // Akshi destination coordinates on Alakol
  const destinationQuery = "Akshi, Alakol, Kazakhstan";
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationQuery)}`;

  return (
    <section
      id="map"
      className="relative w-full py-24 bg-sand-100/50 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sunset-500 mb-3 block">
            {t("map.title")}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-[0.06em] text-ocean-950 mb-6 uppercase">
            {t("map.subtitle")}
          </h2>
          <div className="w-16 h-[2px] bg-sunset-500 mx-auto" />
        </div>

        {/* Map Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl">
          {/* Card Info Overlay (1 Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl glassmorphism border border-white p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-6">
              {/* Pin Header */}
              <div className="flex items-center space-x-3 text-sunset-500">
                <MapPin size={24} className="animate-pulse" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Kamariya Resort
                </span>
              </div>

              {/* Physical Address */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ocean-950">
                  {t("nav.contacts")}
                </h4>
                <p className="text-xs sm:text-sm text-ocean-900/70 font-light leading-relaxed">
                  {t("map.address")}
                </p>
              </div>

              {/* Useful guide tips */}
              <div className="space-y-2 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-ocean-900/60 font-light">
                  <Compass size={16} className="text-sunset-500 mt-0.5 flex-shrink-0" />
                  <span className="text-justify">
                    {t("about.card5.desc")}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-4 rounded-full text-center text-xs sm:text-sm font-semibold tracking-wider uppercase bg-ocean-950 text-white shadow-lg transition-all duration-300 hover:bg-sunset-500 hover:shadow-sunset-500/20 active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <Navigation size={15} />
              <span>{t("map.btnRoute")}</span>
            </a>
          </motion.div>

          {/* Interactive Google Map Embed Frame (2 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11831.621946059637!2d81.5791244!3d45.9595015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x429661413693fb8b%3A0xe54e6015b6cd05a3!2sAkshi%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "brightness(0.95) contrast(1.05) saturate(0.9)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing Kamariya Resort near Alakol"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
