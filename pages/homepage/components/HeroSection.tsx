"use client";
import React, { useEffect } from "react";

// Mouse tracking functions
export const mouseMove = (e: MouseEvent) => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
    `,
  });
};

export const mouseLeave = () => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: 0deg;
      --move-y: 0deg;
    `,
  });
};

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  useEffect(() => {
    // Add event listeners on mount
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div id={id} className='overflow-hidden'>
      <div className="mx-auto max-h-screen h-screen min-h-[500px] transform-3d rotate-x-[var(--move-y)] rotate-y-[var(--move-x)] will-change-transform transition-transform ease-[var(--transition-timing-function)] duration-[var(--transition-duration)] flex items-center justify-center">
        {/* Layer 1 */}
        <div
          className="layer-bg bg-layer-1 w-full h-full -translate-z-[55px] scale-[1.06]"
          style={{
            backgroundImage: `url('/layer-1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Layer 2 */}
        <div
          className="layer-bg bg-layer-2 w-full h-full translate-z-20 scale-[1.06]"
          style={{
            backgroundImage: `url('/layer-2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
          }}
        />

        {/* Layer 3 */}
        <div
          className="layer-bg bg-layer-3 w-full h-full translate-z-[40px] scale-[.88]"
          style={{
            backgroundImage: `url('/layer-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        />

        {/* Layer 4 */}
        <div
          className="layer-bg bg-layer-4 w-full h-full translate-z-[60px] scale-[.88]"
          style={{
            backgroundImage: `url('/layer-4.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 4,
          }}
        />

        {/* Layer Content */}
        <div className="layer-content translate-z-[180px] scale-[.8] flex flex-col justify-center items-center h-full z-10 text-center">
          <h1 className="hero-text text-white font-bold text-3xl md:text-5xl mb-6">
            <div className="block mb-2 md:mb-4" data-aos="fade-down" data-aos-duration="3000">
              CIPTA
            </div>
            <div className="block" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100">
              <span className="text-green-800">PRIMA</span> ENGINEERING
            </div>
            <p className="font-medium text-sm md:text-base mt-5 text-shadow" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
              “Strategic Innovation for Best Environment”
            </p>
          </h1>

          <div className="flex space-x-4 mt-4">
            <a href="#about-us" className="btn px-4 py-2 bg-yellow-600 text-white font-regular rounded-lg hover:bg-yellow-800 transition md:px-6 md:py-3" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
              TENTANG CPE
            </a>
            <a href="#contact-us" className="btn px-4 py-2 border-green-600 border-2 text-green-600 bg-transparent font-regular rounded-lg hover:bg-green-500 hover:text-green-200 transition md:px-6 md:py-3" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
              HUBUNGI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
