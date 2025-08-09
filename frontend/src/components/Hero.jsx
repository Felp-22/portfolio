import React, { useEffect, useState } from "react";
import { Play, ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Hero Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 leading-tight mb-6">
            Crafting Visual
            <br />
            <span className="text-blue-600 font-normal">Stories</span>
            <br />
            for Small Business
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Professional video production that elevates your brand and connects with your audience. 
            From concept to delivery, I bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-medium text-lg shadow-xl hover:shadow-2xl flex items-center gap-3"
            >
              <Play className="h-5 w-5" />
              View My Work
            </button>
            <button
              onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 font-medium text-lg"
            >
              Start Your Project
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowDown className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;