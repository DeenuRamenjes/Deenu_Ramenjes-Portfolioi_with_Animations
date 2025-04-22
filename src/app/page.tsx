"use client"

import LoadingScreen from "@/components/LoadingScreen";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useState } from "react";

export default function Home() {

  
  const [isLoaded,setIsLoaded]=useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      {/* <TestimonialsSection/> */}
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  );
}
