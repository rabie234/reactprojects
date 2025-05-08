import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const floatingElements = heroRef.current.querySelectorAll(".floating");

      floatingElements.forEach((el, index) => {
        const factor = (index + 1) * 10;
        const htmlEl = el as HTMLElement;

        htmlEl.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-tech-blue/20 blur-[100px]" />
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-tech-purple/20 blur-[100px]" />
        <div className="floating absolute top-16 left-16 w-24 h-24 rounded-full bg-gradient-to-r from-tech-blue/40 to-tech-purple/40 blur-2xl" />
        <div className="floating absolute bottom-32 right-32 w-32 h-32 rounded-full bg-gradient-to-r from-tech-purple/40 to-tech-pink/40 blur-2xl" />
      </div>

      {/* Floating elements */}
      <div className="floating absolute top-20 left-[20%] w-12 h-12 rounded-xl rotate-12 bg-tech-blue/10 backdrop-blur-sm border border-tech-blue/20 animate-float" />
      <div
        className="floating absolute top-40 right-[25%] w-16 h-16 rounded-full bg-tech-purple/10 backdrop-blur-sm border border-tech-purple/20 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="floating absolute bottom-32 left-[15%] w-20 h-20 rounded-xl -rotate-12 bg-tech-indigo/10 backdrop-blur-sm border border-tech-indigo/20 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="floating absolute bottom-20 right-[20%] w-14 h-14 rounded-lg rotate-45 bg-tech-pink/10 backdrop-blur-sm border border-tech-pink/20 animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Content */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
          Transforming Ideas Into <br className="hidden md:block" />
          <span className="gradient-text">Digital Reality</span>
        </h1>

        <p
          className="text-lg md:text-xl text-tech-gray max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Powerful solutions that drive innovation and accelerate growth in
          today's rapidly evolving technological landscape.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="btn-shine bg-tech-blue hover:bg-tech-indigo text-white px-8"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-tech-blue text-tech-blue hover:text-white hover:bg-tech-blue"
          >
            Learn More
          </Button>
        </div>

        <div
          className="relative w-full max-w-4xl mx-auto mt-12 animate-fade-in rounded-2xl overflow-hidden shadow-xl"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute inset-0 shine-effect"></div>
          <div className="bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 backdrop-blur-md border border-white/20 rounded-2xl p-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="h-[300px] md:h-[400px] bg-gray-200 rounded-t-xl flex items-center justify-center">
                <img
                  src="https://wowdash.pixcelsthemes.com/wowdash-tailwind/WowDash/wowdash/preview/assets/images/thumbs/demo-img8.png"
                  alt="Devatro Logo"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="py-4 px-6 bg-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
