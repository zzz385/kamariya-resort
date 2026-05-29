"use client";

import React from "react";

interface WaveBackgroundProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({
  className = "",
  color = "text-sand-100",
  flip = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className} ${
        flip ? "transform rotate-180" : ""
      }`}
      style={{ height: "60px", zIndex: 1 }}
    >
      <div className="absolute inset-0 w-[200%] h-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute bottom-0 w-full h-[60px] opacity-30 ${color} animate-wave-slow`}
        >
          <path d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1300,60 1400,60 L1400,120 L0,120 Z" fill="currentColor" />
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute bottom-0 w-full h-[50px] opacity-50 ${color} animate-wave-fast`}
        >
          <path d="M0,80 C100,50 250,110 400,80 C550,50 700,110 850,80 C1000,50 1150,110 1300,80 L1300,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default WaveBackground;
