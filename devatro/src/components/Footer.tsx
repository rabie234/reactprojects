
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/94ed671b-d19d-456b-9d78-c216b636b06e.png" 
                  alt="Devatro Logo" 
                  className="h-10 mb-2" 
                />
              </a>
              <p className="text-sm italic text-white/60">Where Innovation Creates Ripples of Change</p>
            </div>
            <p className="mb-4 text-sm">
              Transforming businesses through innovative technology solutions designed for the modern digital landscape.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons - replace with actual icons */}
              {[1, 2, 3, 4].map((item) => (
                <a key={item} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-devatro-blue/50 transition-colors">
                  <span className="text-xs">{item}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              {["Analytics", "Security", "Automation", "Cloud", "API", "Mobile"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-devatro-blue transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Partners", "Contact", "Legal"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-devatro-blue transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-devatro-purple w-full"
              />
              <button className="bg-gradient-to-r from-devatro-blue to-devatro-purple hover:opacity-90 px-4 rounded-r-md transition-colors">
                <span className="sr-only">Subscribe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {year} Devatro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-devatro-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-devatro-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-devatro-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
