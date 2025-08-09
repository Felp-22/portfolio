import React, { useState, useEffect } from "react";
import { Sun, Moon, Mail, User, Grid3X3 } from "lucide-react";

const FloatingNav = ({ darkMode, setDarkMode, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Show nav when mouse is near top of screen
      if (e.clientY < 100) {
        setIsVisible(true);
      } else if (e.clientY > 200) {
        setIsVisible(false);
        setShowMenu(false);
      }
    };

    const handleScroll = () => {
      // Show nav briefly on scroll
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="bg-black/80 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-4">
          {/* Logo */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-white dark:text-white font-bold text-lg hover:scale-105 transition-transform"
          >
            Felp
          </button>

          <div className="w-px h-6 bg-white/20"></div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
              title="Contact"
            >
              <Mail className="h-4 w-4" />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Menu */}
      {showMenu && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className="bg-black/90 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-64">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-1">Felp</h3>
                <p className="text-white/70 text-sm">Video Creator for Small Business</p>
              </div>
              
              <div className="w-full h-px bg-white/20"></div>
              
              <div className="space-y-3">
                <button
                  onClick={() => {
                    onContactClick();
                    setShowMenu(false);
                  }}
                  className="w-full text-left text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 flex items-center gap-3"
                >
                  <Mail className="h-4 w-4" />
                  <span>Start a Project</span>
                </button>
                
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-full text-left text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 flex items-center gap-3"
                >
                  <Grid3X3 className="h-4 w-4" />
                  <span>All Work</span>
                </button>
                
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-full text-left text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 flex items-center gap-3"
                >
                  <User className="h-4 w-4" />
                  <span>About</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions Overlay (appears once) */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${
        isVisible ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
          Scroll or use ↑↓ keys • Hover top for menu
        </div>
      </div>
    </>
  );
};

export default FloatingNav;