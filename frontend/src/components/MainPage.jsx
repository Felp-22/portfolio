import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight, Eye, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle touch events for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;

    if (isLeftSwipe) {
      handleEnterVideos();
    }
  };

  const handleEnterVideos = () => {
    navigate('/videos');
  };

  return (
    <div 
      ref={pageRef}
      className="min-h-screen bg-yellow-300 dark:bg-black relative overflow-hidden pb-20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Neobrutalism Background Elements - Smaller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-8 w-16 h-16 bg-blue-600 transform rotate-12 border-3 border-black dark:border-white opacity-60"></div>
        <div className="absolute bottom-40 left-8 w-12 h-12 bg-red-500 transform -rotate-45 border-2 border-black dark:border-white"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-400 rounded-full border-2 border-black dark:border-white"></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-purple-500 transform rotate-45 border-2 border-black dark:border-white opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 lg:px-8">
        {/* Logo/Brand - Mobile Optimized */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-none tracking-tighter">
              FELP
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 border-2 border-black dark:border-white transform rotate-45"></div>
          </div>
          
          <div className="mt-2 bg-black dark:bg-white h-1 w-16 mx-auto transform -skew-x-12"></div>
        </div>

        {/* Tagline - Mobile Optimized */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-blue-600 text-white px-4 py-2 border-3 border-black dark:border-white transform -rotate-1 inline-block mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <p className="text-sm md:text-lg font-black uppercase tracking-wide">
              VIDEO CREATOR
            </p>
          </div>
          
          <p className="text-sm md:text-lg font-bold text-black dark:text-white max-w-xl mx-auto">
            CRAFTING VIRAL CONTENT FOR SMALL BUSINESSES
          </p>
        </div>

        {/* Stats Grid - Mobile Optimized */}
        <div className={`grid grid-cols-3 gap-3 max-w-sm mx-auto mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-red-500 border-3 border-black dark:border-white p-3 transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Eye className="h-5 w-5 text-white mx-auto mb-1" />
            <div className="text-lg font-black text-white">150K</div>
            <div className="text-white font-bold text-xs uppercase">VIEWS</div>
          </div>
          
          <div className="bg-green-500 border-3 border-black dark:border-white p-3 transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Users className="h-5 w-5 text-white mx-auto mb-1" />
            <div className="text-lg font-black text-white">25+</div>
            <div className="text-white font-bold text-xs uppercase">CLIENTS</div>
          </div>
          
          <div className="bg-purple-500 border-3 border-black dark:border-white p-3 transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Zap className="h-5 w-5 text-white mx-auto mb-1" />
            <div className="text-lg font-black text-white">96%</div>
            <div className="text-white font-bold text-xs uppercase">VIRAL</div>
          </div>
        </div>

        {/* CTA Button - Mobile Optimized */}
        <div className={`text-center mb-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={handleEnterVideos}
            className="group bg-blue-600 text-white px-6 py-3 border-3 border-black dark:border-white text-lg font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] active:translate-x-1 active:translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <Play className="h-5 w-5 group-active:scale-110 transition-transform" />
              <span>WATCH VIDEOS</span>
              <ArrowRight className="h-5 w-5 group-active:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Swipe Hint - Mobile Optimized */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 border-2 border-black dark:border-white inline-flex items-center gap-2 font-bold uppercase text-xs">
            <ChevronLeft className="h-3 w-3" />
            <span>SWIPE LEFT FOR VIDEOS</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Mobile CTA - Fixed Position - Smaller */}
      <div className="md:hidden fixed bottom-20 left-3 right-3 z-20">
        <button
          onClick={handleEnterVideos}
          className="w-full bg-red-500 text-white py-3 border-3 border-black text-lg font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <div className="flex items-center justify-center gap-2">
            <Play className="h-5 w-5" />
            WATCH NOW
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainPage;