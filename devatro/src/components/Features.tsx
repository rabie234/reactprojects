
import React from "react";
import AnimatedCard from "./AnimatedCard";

const featuresData = [
  {
    icon: "🚀",
    title: "Accelerated Development",
    description: "Build and deploy faster with our streamlined development tools designed for maximum efficiency."
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Protect your data with military-grade encryption and advanced threat detection systems."
  },
  {
    icon: "📊",
    title: "Intelligent Analytics",
    description: "Gain actionable insights with our AI-powered analytics platform that adapts to your business needs."
  },
  {
    icon: "🔄",
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows through our extensive API ecosystem."
  },
  {
    icon: "🌐",
    title: "Global Infrastructure",
    description: "Deliver content quickly anywhere in the world with our distributed edge network."
  },
  {
    icon: "⚡",
    title: "Real-time Collaboration",
    description: "Work together seamlessly with team members across different time zones and locations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Our comprehensive suite of tools and services designed to transform how your business operates in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedCard key={index} delay={index}>
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-tech-dark">
                  {feature.title}
                </h3>
                <p className="text-tech-gray flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-tech-blue hover:text-tech-indigo inline-flex items-center transition-colors">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
