import darkSaasLandingPage from "@/assets/images/quantzi.png";
import lightSaasLandingPage from "@/assets/images/quintorq.png";
import aiStartupLandingPage from "@/assets/images/Infant_Jesus.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";
import DRSMusic from "@/assets/images/DRS_Music.png";



const portfolioProjects = [
  {
    company: "Quantzi",
    year: "2025",
    title: "Quantzi Website home page with animations",
    results: [
      { title: "Delivered a modern UI with clean layout, ensuring cross-device compatibility." },
      { title: "Integrated animations and hover effects for improved engagement." },
      { title: "Optimized page performance and loading speed for animation-heavy sections." },
    ],
    link: "https://quantzi.co/",
    image: darkSaasLandingPage,
  },
  {
    company: "Quintorq",
    year: "2025",
    title: "Quintorq Website",
    results: [
      { title: "Took an existing template and redesigned the UI for a cleaner, more professional look." },
      { title: "Updated all content sections to reflect Quintorq’s services and identity." }
    ],
    link: "https://quintorq.com/",
    image: lightSaasLandingPage,
  },
  {
    company: "Infant Jesus",
    year: "2025",
    title: "Infant Jesus Ads and Blogs",
    results: [
      { title: "Developed a dedicated Ads & Blogs section for dynamic content publishing." },
      { title: "Implemented an easy-to-use CMS structure using QAdmin for quick blog updates." },
    ],
    link: "https://ijce.ac.in/",
    image: aiStartupLandingPage,
  },
  {
  company: "Independent Project",
  year: "2025",
  title: "DRSMusic - Music Streaming Web App",
  results: [
    { title: "Built a responsive music streaming platform with user-friendly UI and customizable theme settings." },
    { title: "Implemented admin module to upload and manage songs and albums." },
    { title: "Added authentication (Clerk) and backend with Node.js, Express.js, and MongoDB." },
    { title: "Developed features like real-time listening status and basic messaging between users." },
  ],
  link: "https://drs-music-player.onrender.com",
  image: DRSMusic,
}
];


export const ProjectsSection = () => {
  return (
    <RevealOnScroll>
      <section id="projects" className="pb-16 lg:py-24">
      <div className="container" style={{marginTop: '20px'}}>
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card
              key={project.title}
              className=" md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8 pb-0 sticky hover:-translate-y-0" style={{
                top:`calc(64px + ${projectIndex * 40}px)`
              }}
            >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">

                  <div className="bg-gradient-to-r from-emerald-400 to-sky-400 
                  inline-flex font-bold uppercase tracking-widest text-sm 
                  bg-clip-text text-transparent gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4"/>
              <ul className="flex flex-col gap-4 mt-4 md:gap-4 md:mt-6">
                {project.results.map((result, resultIndex) => (
                  <li key={`${project.title}-result-${resultIndex}`} className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-4 w-full mt-4 md:justify-start">
                  <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <button className="bg-white hover:bg-white/90 hover:-translate-y-1 transition-transform
                   text-gray-950 h-12 w-full rounded-xl font-semibold
                    inline-flex items-center justify-center gap-2 md:px-6">
                    <span>Live Link</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                </a>
              </div>
                  </div>
                    <div>
                <Image src={project.image} alt={project.title} className="mt-6 -mb-4 md:pb-4 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl" />
                    </div>
                  </div>
            </Card>
          ))}
        </div>
      </div>
      </section>
    </RevealOnScroll>
  );
};
