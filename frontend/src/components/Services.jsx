import React, { useState, useEffect, useRef } from "react";
import { Building, Video, Smartphone, Camera, ArrowRight, Check } from "lucide-react";
import { services } from "../data/mock";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const iconMap = {
    Building: Building,
    Video: Video,
    Smartphone: Smartphone,
    Camera: Camera
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive video production services tailored for small businesses 
            looking to make a big impact in their market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div
                key={service.id}
                className={`group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Service Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-100 rounded-xl p-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-bold text-gray-900">{service.price}</span>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className={`bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-light text-gray-900 mb-4">
              My Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on time, 
              on budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, goals, and target audience" },
              { step: "02", title: "Planning", description: "Creating a detailed script, storyboard, and production timeline" },
              { step: "03", title: "Production", description: "Professional filming with high-end equipment and creative direction" },
              { step: "04", title: "Post-Production", description: "Expert editing, color grading, and final delivery" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;