import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, MessageCircle } from "lucide-react";
import { videoFeedData } from "../data/mock";

const VideoCard = ({ video, isActive, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
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
      <div className="absolute inset-0 flex flex-col justify-between p-3 z-10 pb-28 pointer-events-none">
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

        {/* Bottom Section - Clean Info */}
        <div className="space-y-2 pointer-events-none">
          {/* Client Name Only */}
          <div className="text-white/80 text-sm font-bold">
            {video.client}
          </div>
          
          {/* Title */}
          <div className="bg-white/90 backdrop-blur-sm text-black p-3 border-2 border-black max-w-xs">
            <h3 className="font-bold text-sm leading-tight mb-1">
              {video.title}
            </h3>
            <p className="text-xs text-gray-700">
              {video.description.substring(0, 60)}...
            </p>
          </div>

          {/* Contact CTA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onContactClick(video);
            }}
            className="bg-purple-600 text-white px-4 py-2 border-2 border-white font-bold uppercase text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] transition-all pointer-events-auto"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WORK WITH ME</span>
          </button>
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
      className="h-screen overflow-hidden pb-16 relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ 
        touchAction: 'none', // Disable default touch behaviors
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