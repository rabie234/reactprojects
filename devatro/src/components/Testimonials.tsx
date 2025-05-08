
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Implementation of the platform has increased our operational efficiency by 35% within the first quarter.",
    author: "Sarah Johnson",
    position: "CTO, TechGlobal Inc.",
    image: "/placeholder.svg"
  },
  {
    quote: "The analytics suite provided insights that directly contributed to a 28% increase in our customer retention.",
    author: "Mark Anderson",
    position: "Director of Operations, DataFlow Systems",
    image: "/placeholder.svg"
  },
  {
    quote: "Security features exceed industry standards. We feel confident hosting sensitive client data on this platform.",
    author: "Michelle Lee",
    position: "Security Officer, SecureFinance",
    image: "/placeholder.svg"
  },
  {
    quote: "Customer support has been exceptional, resolving our integration challenges within hours, not days.",
    author: "David Chen",
    position: "Implementation Lead, InnovateTech",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-tech-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by <span className="text-tech-blue">Industry Leaders</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our clients about how our technology solutions have transformed their businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Testimonial slider */}
          <div className="relative h-[300px] md:h-[260px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100 translate-x-0" : 
                  index < activeIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-tech-blue/20 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <blockquote className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                      <div className="font-semibold text-tech-blue">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-tech-blue" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Logos section */}
        <div className="mt-20 relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-xl font-medium text-gray-300">Powering Innovation at</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-32 h-16 bg-white/5 rounded-md flex items-center justify-center">
                <div className="text-gray-400">Logo {item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
