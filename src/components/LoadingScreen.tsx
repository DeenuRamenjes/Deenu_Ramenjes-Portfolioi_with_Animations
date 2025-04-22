"use client"

import React, { useEffect, useState } from "react";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

const LoadingScreen = ({ onComplete }:{onComplete?: () => void}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gray-950">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="size-[120px] rounded-full border-2 border-emerald-300/20 animate-ping"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <StarIcon className="size-12 text-emerald-300 animate-spin [animation-duration:3s]" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Loading Portfolio
          </h2>
          <div className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-white/60">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;