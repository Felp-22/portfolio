import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight, Eye, Heart, MessageCircle } from "lucide-react";

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterVideos = () => {
    navigate('/videos');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100 dark:bg-gray-800/20 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Logo/Brand */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-gray-900 dark:text-white leading-tight mb-6">
            Felp
          </h1>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light">
            Video Creator for Small Business
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting visual stories that elevate brands and connect with audiences. 
            Experience my work in a whole new way.
          </p>
        </div>

        {/* Enter Videos Button */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={handleEnterVideos}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-xl font-medium flex items-center gap-4 mx-auto hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
          >
            <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span>Enter Video Experience</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats Preview */}
        <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="group cursor-pointer">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Eye className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">150K+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Total Views</div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">25+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">96%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Engagement</div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Ready for an immersive video experience?
          </p>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-8 left-6 right-6 z-20">
        <button
          onClick={handleEnterVideos}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-lg font-medium flex items-center justify-center gap-3 shadow-2xl"
        >
          <Play className="h-5 w-5" />
          Watch Videos
        </button>
      </div>
    </div>
  );
};

export default MainPage;