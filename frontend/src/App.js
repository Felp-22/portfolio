import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import VideoFeed from "./components/VideoFeed";
import ContactModal from "./components/ContactModal";
import BottomNav from "./components/BottomNav";
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
      <div className="bg-yellow-300 dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300 font-sans">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<MainPage />} 
            />
            <Route 
              path="/videos" 
              element={
                <VideoFeed 
                  onContactClick={handleContactOpen}
                />
              } 
            />
          </Routes>
          <BottomNav 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            onContactClick={() => setContactOpen(true)}
          />
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