import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import RevealOnScroll from "@/components/RevealOnScroll";

export const HeroSection = () => {
  return (
    <RevealOnScroll>
      <section id="home">
      <div className="py-24 md:py-48 lg:py-60 relative z-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="38s">
          <div className="size-2 rounded-full bg-emerald-300/20 "></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="54s">
          <div className="size-2 rounded-full bg-emerald-300/20 "></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="58s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="58s">
          <div className="size-3 rounded-full bg-emerald-300/20 "></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s">
          <div className="size-3 rounded-full bg-emerald-300/20 "></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="64s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container z-0">
        <div className="flex flex-col items-center z-10 mt-0 lg:-mt-36 md:-mt-16">
          <Image
            src={memojiImage}
            className="size-[180px] "
            alt="Deenu Ramenjes M S"
          />
          <div className="bg-gray-950 hover:bg-gray-900 border border-grey-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="z-40 text-sm font-medium text-center ">
            Hi, I'm M S Deenu Ramenjes a passionate Full-Stack Developer
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto z-10">
          <h1 className=" z-40 font-serif text-2xl  text-center mt-8 tracking-wide md:text-4xl">
          Crafting High-Performance, User-Centric Applications

          </h1>
          <p className="z-40 text-white/60 text-center mt-4 md:text-lg">
          Specializing in React, Next.js, and dynamic UI/UX, 
            I design and build seamless digital experiences with smooth animations, real-time interactions, and optimized performance.
            Let's turn ideas into reality.
          </p>
        </div>
        <div className="z-40 flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
            <a className="font-semibold z-40 hover:-translate-y-1 transition-transform inline-flex
             items-center gap-2 border hover:bg-white/10 border-white/15 p-6 h-12 rounded-xl" 
             href="#projects">Explore My Work  <ArrowDown className="size-4" />  </a>

            <a href="#contact" className="font-semibold z-40 hover:-translate-y-1 transition-transform
             inline-flex items-center gap-2 border hover:bg-black hover:text-white border-white
              bg-white text-gray-900 py-5.5  h-12 rounded-xl px-6 hover:border-gray-700"> 
              <span className="size-5">👇</span> Resume</a>

        </div>
      </div>
    </div>
    </section>
    </RevealOnScroll>
  );
};
