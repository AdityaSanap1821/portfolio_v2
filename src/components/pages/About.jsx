//src/components/pages/About.jsx

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import PageWrapper from "../PageWrapper";
import AboutTabs from "../about_tabs/AboutTabs";

export default function About() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    sr.reveal(".featured-text", {});

  }, []);

  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center text-center min-h-screen w-full pt-16 pb-16">
        {/* Ghost + Main Text Wrapper */}
        <div className="relative w-full flex items-center justify-center mt-10">
          {/* Ghost Text with vertical gradient fade and padding */}
          <div
            className="absolute z-0 -translate-y-10 px-8 whitespace-nowrap featured-text"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] uppercase font-extrabold tracking-[0.4em] text-white/20 select-none pointer-events-none">
              ABOUT
            </h1>
          </div>

          {/* Main name text */}
          <h1 className="relative text-[2rem] md:text-[3rem] lg:text-[5rem] tracking-[0.4em] uppercase font-Avenir leading-none text-white featured-text z-10 whitespace-nowrap">
            ABOUT
          </h1>
        </div>
        <AboutTabs />
      </div>

    </PageWrapper>
  );
}