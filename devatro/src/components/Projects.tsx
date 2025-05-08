
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projectItems: ProjectItem[] = [
  {
    id: 1,
    title: "Cloud Integration Platform",
    description: "Enterprise-grade solution connecting legacy systems with modern cloud infrastructure",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "Security Analytics Dashboard",
    description: "Real-time monitoring system with AI-powered threat detection and response",
    category: "Security",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    title: "Smart Factory Automation",
    description: "IoT-enabled manufacturing optimization with predictive maintenance capabilities",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500"
  },
];

const Projects = () => {
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
      id="projects" 
      className="py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-dark">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations with our innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 3} className="flex flex-col h-full">
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-medium text-tech-blue mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-tech-gray mb-4 flex-grow">{project.description}</p>
                <Button variant="ghost" className="text-tech-blue hover:text-tech-indigo self-start group">
                  View Case Study <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button size="lg" className="bg-tech-blue hover:bg-tech-indigo transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
