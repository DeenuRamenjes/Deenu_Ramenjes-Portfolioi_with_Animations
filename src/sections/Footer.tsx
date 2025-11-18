import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import RevealOnScroll from "@/components/RevealOnScroll";

export const Footer = () => {
  const footerLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/deenu-ramenjes-ms-b49902336/"
    },
    {
      title: "GitHub",
      href: "https://github.com/DeenuRamenjes"
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/_mr_zoldyck_?igsh=MW45ajE0Z2tlczBsdQ=="
    }
  ];

  return (
    <RevealOnScroll>
      <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10
      bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]">
      </div>
      <div className="container">
        <div className="border-t border-white/15 py-6 md:flex-row md:justify-between flex flex-col items-center text-sm gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map(link => (
              <a 
                href={link.href} 
                key={link.title} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:-translate-y-1 transition-transform"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
    </RevealOnScroll>
  )
};
