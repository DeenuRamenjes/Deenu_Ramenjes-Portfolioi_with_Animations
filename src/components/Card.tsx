import React, { ComponentPropsWithoutRef} from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children,...other }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <>
      <div
        className={twMerge(
          "bg-gray-800 hover:-translate-y-2 transition-transform rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2  after:-outline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 after:pointer-events-none",
          className
        )}
        {...other}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
