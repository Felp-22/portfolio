import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VideoFeed from "./components/VideoFeed";
import ContactModal from "./components/ContactModal";
import FloatingNav from "./components/FloatingNav";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactOpen = (video) => {
    setSelectedVideo(video);
    setContactOpen(true);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
        <BrowserRouter>
          <FloatingNav 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            onContactClick={() => setContactOpen(true)}
          />
          <Routes>
            <Route 
              path="/" 
              element={
                <VideoFeed 
                  onContactClick={handleContactOpen}
                />
              } 
            />
          </Routes>
          <ContactModal 
            isOpen={contactOpen}
            onClose={() => setContactOpen(false)}
            selectedVideo={selectedVideo}
          />
          <Toaster />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;