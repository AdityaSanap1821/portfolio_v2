// File: src/components/pages/Home.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import PageWrapper from "../PageWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "a Software Developer",
        "an Android Developer",
        "a Cricket Fan",
        "a Casual Gamer"
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    sr.reveal(".featured-text", {});
    sr.reveal(".featured-button", { delay: 200 });
    sr.reveal(".fade-social", {
      origin: "bottom",
      distance: "40px",
      duration: 1200,
      delay: 400,
      opacity: 0,
      easing: "ease-in-out",
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center justify-center text-center w-full min-h-screen py-20">
        {/* Ghost + Main Text Wrapper */}
        <div className="relative w-full flex items-center justify-center">
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
              ADITYA SANAP
            </h1>
          </div>

          {/* Main name text */}
          <h1 className="relative text-[2rem] md:text-[3rem] lg:text-[5rem] tracking-[0.4em] uppercase font-Avenir leading-none text-white featured-text z-10 whitespace-nowrap">
            ADITYA SANAP
          </h1>
        </div>


        {/* Typed subtitle */}
        <p className="text-lg md:text-2xl mt-12 tracking-widest featured-text z-10">
          I am <span className="typedText" ref={typedRef}></span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 featured-button z-10">
          {/* HIRE ME Button */}
          <Link
            to="/contact"
            className="px-8 py-3 border border-white text-white rounded-full transition duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition duration-300">HIRE ME</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full z-0"></span>
          </Link>

          {/* DOWNLOAD CV Button */}
          <a
            href="https://drive.google.com/file/d/1oJQej0cuXPHucOk4dArAMWMUxAlBskkU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 bg-white text-black border border-white rounded-full overflow-hidden group transition-colors duration-300"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              DOWNLOAD CV
            </span>
            <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0" />
          </a>

        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6 justify-center items-center text-2xl text-white social_icons z-10 fade-social">
          <a
            href="https://www.linkedin.com/in/aditya-sanap-ams1821/"
            target="_blank"
            title="Linkedin"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/AdityaSanap1821"
            target="_blank"
            title="Github"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.figma.com/@adityasanap1821"
            target="_blank"
            title="Figma"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <i className="fa-brands fa-figma"></i>
          </a>

          <a
            href="https://cobra-bts.itch.io/"
            target="_blank"
            title="Itch.io"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <i className="fa-brands fa-itch-io"></i>
          </a>
        </div>

      </div>
    </PageWrapper>
  );
}
