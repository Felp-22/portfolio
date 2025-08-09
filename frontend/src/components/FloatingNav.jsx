import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Mail, User, Grid3X3, Home, Play, X } from "lucide-react";

const FloatingNav = ({ darkMode, setDarkMode, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isOnVideoPage = location.pathname === '/videos';

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

    // Always show on main page, conditional on videos page
    if (!isOnVideoPage) {
      setIsVisible(true);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('wheel', handleScroll);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isOnVideoPage]);

  const navigationItems = [
    {
      icon: Home,
      label: "Home",
      action: () => navigate('/'),
      show: isOnVideoPage
    },
    {
      icon: Play,
      label: "Videos",
      action: () => navigate('/videos'),
      show: !isOnVideoPage
    },
    {
      icon: Mail,
      label: "Contact",
      action: onContactClick,
      show: true
    },
    {
      icon: darkMode ? Sun : Moon,
      label: darkMode ? "Light Mode" : "Dark Mode",
      action: () => setDarkMode(!darkMode),
      show: true
    }
  ];

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
            {navigationItems.filter(item => item.show).map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setShowMenu(false);
                }}
                className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
                title={item.label}
              >
                <item.icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Expanded Menu */}
      {showMenu && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className="bg-black/90 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-64">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Felp</h3>
                <p className="text-white/70 text-sm">Video Creator for Small Business</p>
              </div>
              <button
                onClick={() => setShowMenu(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="w-full h-px bg-white/20 mb-6"></div>
            
            {/* Navigation Items */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  navigate('/');
                  setShowMenu(false);
                }}
                className="w-full text-left text-white/80 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10 flex items-center gap-3"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              
              <button
                onClick={() => {
                  navigate('/videos');
                  setShowMenu(false);
                }}
                className="w-full text-left text-white/80 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10 flex items-center gap-3"
              >
                <Play className="h-4 w-4" />
                <span>Video Experience</span>
              </button>
              
              <button
                onClick={() => {
                  onContactClick();
                  setShowMenu(false);
                }}
                className="w-full text-left text-white/80 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10 flex items-center gap-3"
              >
                <Mail className="h-4 w-4" />
                <span>Start a Project</span>
              </button>
              
              <div className="w-full h-px bg-white/20 my-3"></div>
              
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setShowMenu(false);
                }}
                className="w-full text-left text-white/80 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10 flex items-center gap-3"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-white font-semibold text-lg">8</div>
                  <div className="text-white/60 text-xs">Videos</div>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">25+</div>
                  <div className="text-white/60 text-xs">Clients</div>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">150K</div>
                  <div className="text-white/60 text-xs">Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions Overlay - only on video page */}
      {isOnVideoPage && (
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${
          isVisible ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            Scroll or use ↑↓ keys • Hover top for menu
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNav;