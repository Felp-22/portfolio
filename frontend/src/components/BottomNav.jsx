import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Mail, Home, Play, Menu, X } from "lucide-react";

const BottomNav = ({ darkMode, setDarkMode, onContactClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isOnVideoPage = location.pathname === '/videos';

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Expanded Menu Overlay - Mobile Optimized */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="absolute bottom-16 left-2 right-2 bg-yellow-300 dark:bg-gray-900 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            {/* Header - Compact */}
            <div className="flex items-center justify-between p-3 border-b-2 border-black dark:border-white">
              <div>
                <h3 className="text-black dark:text-white font-black text-lg uppercase">FELP</h3>
                <p className="text-black dark:text-white font-bold text-xs uppercase">Creator</p>
              </div>
              <button
                onClick={toggleMenu}
                className="bg-red-500 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            {/* Navigation Items - Compact */}
            <div className="p-3 space-y-2">
              <button
                onClick={() => {
                  navigate('/');
                  setShowMenu(false);
                }}
                className="w-full text-left bg-blue-600 text-white p-2 border-2 border-black dark:border-white font-bold uppercase text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <Home className="h-4 w-4" />
                <span>HOME</span>
              </button>
              
              <button
                onClick={() => {
                  navigate('/videos');
                  setShowMenu(false);
                }}
                className="w-full text-left bg-green-500 text-white p-2 border-2 border-black dark:border-white font-bold uppercase text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <Play className="h-4 w-4" />
                <span>VIDEOS</span>
              </button>
              
              <button
                onClick={() => {
                  onContactClick();
                  setShowMenu(false);
                }}
                className="w-full text-left bg-purple-600 text-white p-2 border-2 border-black dark:border-white font-bold uppercase text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>CONTACT</span>
              </button>
            </div>

            {/* Stats - Compact */}
            <div className="p-3 border-t-2 border-black dark:border-white">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-red-500 text-white p-2 border-2 border-black dark:border-white">
                  <div className="font-black text-sm">8</div>
                  <div className="font-bold text-xs uppercase">Videos</div>
                </div>
                <div className="bg-blue-600 text-white p-2 border-2 border-black dark:border-white">
                  <div className="font-black text-sm">25+</div>
                  <div className="font-bold text-xs uppercase">Clients</div>
                </div>
                <div className="bg-green-500 text-white p-2 border-2 border-black dark:border-white">
                  <div className="font-black text-sm">150K</div>
                  <div className="font-bold text-xs uppercase">Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-300 dark:bg-black border-t-4 border-black dark:border-white">
        <div className="flex items-center justify-between px-3 py-2">
          {/* Logo/Brand - Smaller */}
          <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 border-2 border-black dark:border-white font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            FELP
          </div>

          {/* Navigation Icons - Smaller */}
          <div className="flex items-center gap-2">
            {/* Home/Videos Toggle */}
            <button
              onClick={() => navigate(isOnVideoPage ? '/' : '/videos')}
              className="bg-blue-600 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {isOnVideoPage ? <Home className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Contact */}
            <button
              onClick={onContactClick}
              className="bg-red-500 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <Mail className="h-4 w-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-yellow-400 text-black p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Menu */}
            <button
              onClick={toggleMenu}
              className="bg-purple-600 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Swipe Hints - Smaller */}
        <div className="px-3 pb-1 text-center">
          <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 border border-black dark:border-white inline-block font-bold text-xs uppercase">
            {isOnVideoPage ? '→ SWIPE FOR HOME' : '← SWIPE FOR VIDEOS'}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;