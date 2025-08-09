import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, MessageCircle } from "lucide-react";
import { videoFeedData } from "../data/mock";

const VideoCard = ({ video, isActive, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        console.log("Auto-play failed for video:", video.title);
        setIsPlaying(false);
      });
    } else if (videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  }, [isActive]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleWhatsAppContact = (e) => {
    e.stopPropagation();
    const whatsappUrl = "https://wa.me/5598991260902?text=Ol%C3%A1.%20Vim%20pelo%20seu%20web-portfolio%2C%20gostaria%20de%20trabalhar%20com%20voc%C3%AA.%20";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative w-full h-screen flex-shrink-0 bg-black overflow-hidden">
      {/* Auto-playing Video - NO THUMBNAIL/POSTER */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        onLoadedData={() => {
          if (isActive && videoRef.current) {
            videoRef.current.play().catch(() => {
              setIsPlaying(false);
            });
          }
        }}
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Minimal UI Overlays */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 z-10 pointer-events-none">
        {/* Top Section */}
        <div className="flex justify-between items-start pointer-events-none">
          <div className="bg-blue-600 text-white px-2 py-1 text-xs font-bold uppercase border-2 border-white">
            {video.category}
          </div>
          
          {/* Sound Control */}
          <button
            onClick={toggleMute}
            className="bg-black/60 text-white p-2 border-2 border-white/50 backdrop-blur-sm pointer-events-auto"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        {/* Center Play Button - Only when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm text-white p-6 border-2 border-white/50 rounded-full hover:bg-white/30 transition-all"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Left Section - Video Info (Moved Up) */}
        <div className="absolute bottom-32 left-3 space-y-3 pointer-events-none max-w-xs">
          {/* Client Name */}
          <div className="text-white/90 text-base font-bold drop-shadow-lg">
            {video.client}
          </div>
          
          {/* Title & Description */}
          <div className="bg-white/95 backdrop-blur-sm text-black p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]">
            <h3 className="font-bold text-base leading-tight mb-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {video.description.substring(0, 80)}...
            </p>
          </div>
        </div>

        {/* Right Side Action Button - TikTok Style */}
        <div className="absolute bottom-32 right-3 pointer-events-auto">
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 text-white p-4 rounded-full border-3 border-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:scale-105 transition-all"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          <div className="text-white text-xs font-bold text-center mt-2 drop-shadow-lg">
            WORK WITH ME
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: isActive ? '100%' : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const VideoFeed = ({ onContactClick }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Touch handling state
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const navigateToVideo = (index) => {
    if (isScrolling || index < 0 || index >= videoFeedData.length) return;
    
    setIsScrolling(true);
    setCurrentVideoIndex(index);
    
    setTimeout(() => setIsScrolling(false), 800);
  };

  // Handle touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStartY(touch.clientY);
    setTouchStartX(touch.clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartY || !touchStartX) return;
    
    const touch = e.changedTouches[0];
    const touchEndY = touch.clientY;
    const touchEndX = touch.clientX;
    
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;
    
    const minSwipeDistance = 50;
    
    // Vertical swipe for video navigation
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > minSwipeDistance) {
      if (diffY > 0) {
        // Swiped up - next video
        navigateToVideo(currentVideoIndex + 1);
      } else {
        // Swiped down - previous video
        navigateToVideo(currentVideoIndex - 1);
      }
    }
    
    // Horizontal swipe to go back to main page
    if (Math.abs(diffX) > Math.abs(diffY) && diffX < -100) {
      navigate('/');
    }
    
    setTouchStartY(null);
    setTouchStartX(null);
  };

  // Mouse wheel support
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentVideoIndex + direction;
      
      navigateToVideo(newIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentVideoIndex, isScrolling]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        navigateToVideo(currentVideoIndex - 1);
      } else if (e.key === 'ArrowDown') {
        navigateToVideo(currentVideoIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentVideoIndex]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ 
        touchAction: 'none',
        userSelect: 'none'
      }}
    >
      {/* Video Container */}
      <div 
        className="h-full w-full"
        style={{
          transform: `translateY(-${currentVideoIndex * 100}vh)`,
          transition: isScrolling ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
        }}
      >
        {videoFeedData.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === currentVideoIndex}
            onContactClick={onContactClick}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;