import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";



// const portfolioProjects = [
//   {
//     company: "E-Commerce Website",
//     year: "2025",
//     title: "Dark Saas Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: darkSaasLandingPage,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];


const portfolioProjects = [
  {
    company: "E-Commerce Website",
    year: "2025",
    title: "Full-Stack E-Commerce Website using ReactJS & Stripe",
    results: [
      { title: "Implemented secure transaction processing with Stripe" },
      { title: "Developed dynamic product listings and cart management" },
      { title: "Added JWT-based authentication for user security" },
    ],
    link: "URL_TO_LIVE_DEMO",
    github: "URL_TO_GITHUB",
    image: darkSaasLandingPage,
  },
  {
    company: "Spotify Clone",
    year: "2025",
    title: "Spotify Clone – Real-Time Chat & Live Listening",
    results: [
      { title: "Boosted engagement by integrating live listening features" },
      { title: "Enabled real-time chat functionality using Socket.io" },
      { title: "Implemented user authentication with Clerk" },
    ],
    link: "URL_TO_LIVE_DEMO",
    github: "URL_TO_GITHUB",
    image: lightSaasLandingPage,
  },
  {
    company: "Flashback App",
    year: "2025",
    title: "FlashBack – A Social Media App using React Native",
    results: [
      { title: "Built real-time post sharing with Convex database" },
      { title: "Implemented secure user authentication via Clerk" },
      { title: "Added push notifications for increased engagement" },
    ],
    link: "URL_TO_LIVE_DEMO",
    github: "URL_TO_GITHUB",
    image: aiStartupLandingPage,
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card
              key={project.title}
              className=" md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8 pb-0 sticky" style={{
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
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white hover:bg-white/90 hover:-translate-y-1 transition-transform text-gray-950 h-12 w-full rounded-xl font-semibold
                inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                  <span>Visit Live Site</span>
                  <ArrowUpRight className="size-4" />
                  </button>
              </a>
                  </div>
                    <div>
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:pb-4 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                    </div>
                  </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
