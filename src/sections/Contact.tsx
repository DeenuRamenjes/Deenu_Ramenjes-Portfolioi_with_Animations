import ArrowUpRightIcon from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r lg:pt-6 from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 
        rounded-3xl text-center relative overflow-hidden z-0 md:text-left hover:-translate-y-2 transition-transform">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
               Let’s connect and explore how my expertise can help you achieve success. <br /> <br />
               Download my resume to get a detailed overview of my skills and experience.
              </p>
            </div>
            <div>
              <button className="text-white mb-8 hover:-translate-y-1 transition-transform bg-gray-900 inline-flex items-center  hover:border-white
              px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-950 hover:bg-white hover:text-gray-900" onClick={() => window.open('https://drive.usercontent.google.com/uc?id=1udbI7FRIRk7V2pZr6Fhgcb-PBsZURx_R&export=download', '_self')}>
                <span className="font-semibold">Download</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
