"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Phone } from "lucide-react";
import Instagram from "@/components/icons/Instagram";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
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

  return (
    <footer className="w-full bg-ocean-950 text-sand-200 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex flex-col select-none group"
          >
            <span className="font-display font-bold text-2xl tracking-[0.2em] text-sand-50 group-hover:text-sunset-500 transition-colors">
              KAMARIYA
            </span>
            <span className="text-[10px] tracking-[0.35em] text-sand-300/80 uppercase font-light -mt-1 group-hover:text-sand-100 transition-colors">
              RESORT
            </span>
          </a>
          <p className="text-xs text-sand-300/60 leading-relaxed font-light max-w-sm">
            {t("about.desc1")}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sand-100">
            {t("nav.home")}
          </h4>
          <div className="grid grid-cols-2 gap-4 text-xs font-light text-sand-300/80">
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-sunset-500 transition-colors">
              {t("nav.home")}
            </a>
            <a href="#rooms" onClick={(e) => handleScrollTo(e, "#rooms")} className="hover:text-sunset-500 transition-colors">
              {t("nav.rooms")}
            </a>
            <a href="#pricing" onClick={(e) => handleScrollTo(e, "#pricing")} className="hover:text-sunset-500 transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#gallery" onClick={(e) => handleScrollTo(e, "#gallery")} className="hover:text-sunset-500 transition-colors">
              {t("nav.gallery")}
            </a>
            <a href="#contacts" onClick={(e) => handleScrollTo(e, "#contacts")} className="hover:text-sunset-500 transition-colors">
              {t("nav.contacts")}
            </a>
          </div>
        </div>

        {/* Contacts column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sand-100">
            {t("nav.contacts")}
          </h4>
          <div className="space-y-2 text-xs font-light text-sand-300/80">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={12} className="text-sunset-500" />
              <span>+7 (776) 136-45-73</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={12} className="text-sunset-500" />
              <span>+7 (707) 351-08-14</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Instagram size={12} className="text-sunset-500" />
              <span>@alakol_kamariya</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copy footer strip */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-center gap-4 text-xs font-light text-sand-300/40">
        <p>
          &copy; {currentYear} Kamariya Resort. {t("footer.rights")}
        </p>
        <p className="hover:text-sunset-500 transition-colors">
          {t("footer.made")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
