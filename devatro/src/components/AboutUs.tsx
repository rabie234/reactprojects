
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building, Users, Handshake } from "lucide-react";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-dark">
            About <span className="devatro-gradient-text">Us</span>
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Leading the way in innovative technology solutions since 2015. Get to know our journey and mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="reveal-on-scroll" style={{transitionDelay: "200ms"}}>
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Devatro Team Working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center reveal-on-scroll" style={{transitionDelay: "400ms"}}>
            <h3 className="text-2xl font-bold mb-4 text-tech-dark">Our Story</h3>
            <p className="text-tech-gray mb-6">
              Founded in 2015, Devatro began with a simple vision: to bridge the gap between complex technology and practical business solutions. What started as a small team of passionate innovators has grown into a leading technology company trusted by enterprises worldwide.
            </p>
            <p className="text-tech-gray mb-6">
              Through years of dedication and innovation, we've developed cutting-edge solutions that help businesses transform their operations, enhance security, and drive growth in an increasingly digital world.
            </p>
            <Button variant="outline" className="self-start border-devatro-purple text-devatro-purple hover:bg-devatro-purple hover:text-white">
              Learn More About Our Journey
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl reveal-on-scroll" style={{transitionDelay: "100ms"}}>
            <div className="bg-devatro-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building className="text-devatro-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tech-dark">Our Mission</h3>
            <p className="text-tech-gray">
              To empower organizations with innovative technology solutions that solve complex problems and drive meaningful transformation.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl reveal-on-scroll" style={{transitionDelay: "300ms"}}>
            <div className="bg-devatro-purple/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-devatro-purple" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tech-dark">Our Team</h3>
            <p className="text-tech-gray">
              A diverse group of passionate experts dedicated to excellence and innovation, working together to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl reveal-on-scroll" style={{transitionDelay: "500ms"}}>
            <div className="bg-devatro-pink/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Handshake className="text-devatro-pink" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-tech-dark">Our Values</h3>
            <p className="text-tech-gray">
              Integrity, innovation, collaboration, and client success are the core values that guide our decisions and shape our company culture.
            </p>
          </div>
        </div>

        <div className="text-center reveal-on-scroll" style={{transitionDelay: "300ms"}}>
          <p className="text-tech-dark text-lg font-medium mb-6 max-w-2xl mx-auto">
            Join us as we continue to push the boundaries of what's possible with technology, creating solutions that make a difference.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-devatro-blue via-devatro-purple to-devatro-pink hover:opacity-90">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
