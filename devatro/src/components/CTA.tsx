
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 animated-gradient opacity-10"></div>
      
      <div 
        ref={ctaRef}
        className="container mx-auto px-4 reveal-on-scroll"
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-tech-blue to-tech-purple rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Join thousands of companies that have already revolutionized their operations with our cutting-edge technology solutions.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button size="lg" className="bg-white text-tech-blue hover:bg-white/90 px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
