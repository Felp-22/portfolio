import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Mail, Home, Play, Menu, X, Zap } from "lucide-react";

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
      {/* Expanded Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="absolute bottom-28 left-4 right-4 bg-yellow-300 dark:bg-gray-900 border-8 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-4 border-black dark:border-white">
              <div>
                <h3 className="text-black dark:text-white font-black text-2xl uppercase">FELP</h3>
                <p className="text-black dark:text-white font-bold text-sm uppercase">Video Creator</p>
              </div>
              <button
                onClick={toggleMenu}
                className="bg-red-500 text-white p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="p-6 space-y-4">
              <button
                onClick={() => {
                  navigate('/');
                  setShowMenu(false);
                }}
                className="w-full text-left bg-blue-600 text-white p-4 border-4 border-black dark:border-white font-black uppercase text-lg flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Home className="h-6 w-6" />
                <span>HOME</span>
              </button>
              
              <button
                onClick={() => {
                  navigate('/videos');
                  setShowMenu(false);
                }}
                className="w-full text-left bg-green-500 text-white p-4 border-4 border-black dark:border-white font-black uppercase text-lg flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Play className="h-6 w-6" />
                <span>VIDEOS</span>
              </button>
              
              <button
                onClick={() => {
                  onContactClick();
                  setShowMenu(false);
                }}
                className="w-full text-left bg-purple-600 text-white p-4 border-4 border-black dark:border-white font-black uppercase text-lg flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Mail className="h-6 w-6" />
                <span>CONTACT</span>
              </button>
              
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setShowMenu(false);
                }}
                className="w-full text-left bg-yellow-400 text-black p-4 border-4 border-black font-black uppercase text-lg flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                <span>{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="p-6 border-t-4 border-black dark:border-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-red-500 text-white p-3 border-4 border-black dark:border-white">
                  <div className="font-black text-xl">8</div>
                  <div className="font-bold text-xs uppercase">Videos</div>
                </div>
                <div className="bg-blue-600 text-white p-3 border-4 border-black dark:border-white">
                  <div className="font-black text-xl">25+</div>
                  <div className="font-bold text-xs uppercase">Clients</div>
                </div>
                <div className="bg-green-500 text-white p-3 border-4 border-black dark:border-white">
                  <div className="font-black text-xl">150K</div>
                  <div className="font-bold text-xs uppercase">Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-300 dark:bg-black border-t-8 border-black dark:border-white">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo/Brand */}
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 border-4 border-black dark:border-white font-black uppercase text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
            FELP
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-4">
            {/* Home/Videos Toggle */}
            <button
              onClick={() => navigate(isOnVideoPage ? '/' : '/videos')}
              className="bg-blue-600 text-white p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              {isOnVideoPage ? <Home className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>

            {/* Contact */}
            <button
              onClick={onContactClick}
              className="bg-red-500 text-white p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <Mail className="h-6 w-6" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-yellow-400 text-black p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            {/* Menu */}
            <button
              onClick={toggleMenu}
              className="bg-purple-600 text-white p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Swipe Hints */}
        <div className="px-6 pb-2 text-center">
          <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 border-2 border-black dark:border-white inline-block font-bold text-xs uppercase">
            {isOnVideoPage ? '← SWIPE RIGHT TO HOME' : '← SWIPE LEFT FOR VIDEOS'}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;