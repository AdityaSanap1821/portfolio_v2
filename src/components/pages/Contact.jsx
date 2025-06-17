// src/components/pages/Contact.jsx

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import PageWrapper from "../PageWrapper";

export default function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".featured-text", {
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
  }, []);

  return (
    <PageWrapper>
      <div id="Contact" className="relative flex flex-col items-center text-center min-h-screen w-full pt-16 px-4">
        {/* Ghost + Main Text */}
        <div className="relative w-full flex items-center justify-center mt-10">
          <div
            className="absolute z-0 -translate-y-10 px-8 whitespace-nowrap featured-text"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] uppercase font-extrabold tracking-[0.4em] text-white/20 select-none pointer-events-none">
              CONTACT ME
            </h1>
          </div>

          <h1 className="relative text-[2rem] md:text-[3rem] lg:text-[5rem] tracking-[0.4em] uppercase font-Avenir leading-none text-white featured-text z-10 whitespace-nowrap">
            CONTACT ME
          </h1>
        </div>

        {/* Contact Info Panel Only */}
        <div className="mt-16 w-full max-w-2xl px-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left text-white space-y-6 shadow-xl backdrop-blur">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <div>
              <p className="font-medium">Phone:</p>
              <p className="text-neutral-300">+91 9372530208</p>
            </div>

            <div>
              <p className="font-medium">Email:</p>
              <p className="text-neutral-300">adityas182107@gmail.com</p>
            </div>

            <div>
              <p className="font-medium">Connect with me:</p>
              <div className="mt-4 flex gap-6 items-center text-2xl text-white">
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
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
