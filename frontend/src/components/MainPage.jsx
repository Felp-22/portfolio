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
    const isRightSwipe = distance < -50;

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
      className="min-h-screen bg-yellow-300 dark:bg-black relative overflow-hidden pb-24"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Neobrutalism Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-600 transform rotate-12 border-8 border-black dark:border-white opacity-80"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-red-500 transform -rotate-45 border-6 border-black dark:border-white"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full border-6 border-black dark:border-white"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-purple-500 transform rotate-45 border-6 border-black dark:border-white opacity-70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12">
        {/* Logo/Brand */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black text-black dark:text-white leading-none tracking-tighter">
              FELP
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 border-4 border-black dark:border-white transform rotate-45"></div>
          </div>
          
          <div className="mt-4 bg-black dark:bg-white h-2 w-32 mx-auto transform -skew-x-12"></div>
        </div>

        {/* Tagline */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-blue-600 text-white px-8 py-4 border-8 border-black dark:border-white transform -rotate-1 inline-block mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <p className="text-xl md:text-2xl font-black uppercase tracking-wide">
              VIDEO CREATOR
            </p>
          </div>
          
          <p className="text-lg md:text-xl font-bold text-black dark:text-white max-w-2xl mx-auto">
            CRAFTING VIRAL CONTENT FOR SMALL BUSINESSES
          </p>
        </div>

        {/* Stats Grid - Neobrutalism Style */}
        <div className={`grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-red-500 border-6 border-black dark:border-white p-6 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Eye className="h-8 w-8 text-white mx-auto mb-2" />
            <div className="text-3xl font-black text-white">150K</div>
            <div className="text-white font-bold text-sm uppercase">VIEWS</div>
          </div>
          
          <div className="bg-green-500 border-6 border-black dark:border-white p-6 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Users className="h-8 w-8 text-white mx-auto mb-2" />
            <div className="text-3xl font-black text-white">25+</div>
            <div className="text-white font-bold text-sm uppercase">CLIENTS</div>
          </div>
          
          <div className="bg-purple-500 border-6 border-black dark:border-white p-6 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:transform hover:rotate-0 transition-transform">
            <Zap className="h-8 w-8 text-white mx-auto mb-2" />
            <div className="text-3xl font-black text-white">96%</div>
            <div className="text-white font-bold text-sm uppercase">VIRAL</div>
          </div>
        </div>

        {/* CTA Button - Neobrutalism Style */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={handleEnterVideos}
            className="group bg-blue-600 text-white px-12 py-6 border-8 border-black dark:border-white text-2xl font-black uppercase transform hover:transform hover:translate-x-2 hover:translate-y-2 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="flex items-center gap-4">
              <Play className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span>WATCH VIDEOS</span>
              <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>

        {/* Swipe Hint */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 border-4 border-black dark:border-white inline-flex items-center gap-3 font-bold uppercase text-sm">
            <ChevronLeft className="h-4 w-4" />
            <span>SWIPE LEFT FOR VIDEOS</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Mobile CTA - Fixed Position */}
      <div className="md:hidden fixed bottom-28 left-4 right-4 z-20">
        <button
          onClick={handleEnterVideos}
          className="w-full bg-red-500 text-white py-4 border-6 border-black text-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all"
        >
          <div className="flex items-center justify-center gap-3">
            <Play className="h-6 w-6" />
            WATCH NOW
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainPage;