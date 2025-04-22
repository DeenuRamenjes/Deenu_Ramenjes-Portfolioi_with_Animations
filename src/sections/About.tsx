"use client"
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import mapImage from "@/assets/images/map.png";
import smileImage from "@/assets/images/memoji-smile.png";
import Cardheader from "@/components/Cardheader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
  {
    title: "Traveling",
    emoji: "🗺️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
];

export const AboutSection = () => {
  const constraintRef=useRef(null)
  return (
    <section id="about">
      <div className="py-20 lg:py-28 ">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className=" grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <Cardheader
                title="My Reads"
                discription="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <Cardheader
                title="My Toolbox"
                discription="Explore the technologies and tools I use to craft exceptional
                  digital experiences."
                className=""
              />

              <ToolBoxItems
                items={toolboxItems}
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassname="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="gap-8 md:grid-cols-5 grid grid-cols-1 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <Cardheader
                title="Beyond the Code"
                discription="Explore my interests and hobbies beyound the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 items-center px-6 bg-gradient-to-r
                    from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2
              after:-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r
              from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r
              from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileImage}
                  alt="Smile memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
