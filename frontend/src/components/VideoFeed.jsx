import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, MessageCircle } from "lucide-react";
import { videoFeedData } from "../data/mock";

const VideoCard = ({ video, isActive, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [controlsTimer, setControlsTimer] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      // Auto-play when active
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            setIsPlaying(false);
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  }, [isActive]);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimer) clearTimeout(controlsTimer);
    const timer = setTimeout(() => setShowControls(false), 3000);
    setControlsTimer(timer);
  };

  return (
    <div className="relative w-full h-screen flex-shrink-0 bg-black overflow-hidden">
      {/* Auto-playing Video (No Thumbnail) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        autoPlay={isActive}
        poster={video.thumbnail}
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Minimal UI Overlays */}
      <div 
        className="absolute inset-0 flex flex-col justify-between p-3 z-10 pb-28"
        onTouchStart={(e) => {
          e.stopPropagation();
          showControlsTemporarily();
        }}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
          showControlsTemporarily();
        }}
      >
        {/* Top Section - Minimal Category & Sound */}
        <div className="flex justify-between items-start">
          <div className="bg-blue-600 text-white px-2 py-1 text-xs font-bold uppercase border-2 border-white">
            {video.category}
          </div>
          
          {/* Sound Control - Show when tapped */}
          {showControls && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="bg-black/60 text-white p-2 border-2 border-white/50 backdrop-blur-sm"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          )}
        </div>

        {/* Center Play Button - Only when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="bg-white/20 backdrop-blur-sm text-white p-6 border-2 border-white/50 rounded-full hover:bg-white/30 transition-all"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Section - Minimal Info */}
        <div className="space-y-2">
          {/* Compact Info */}
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold border border-black">
              {video.duration}
            </span>
            <span className="text-white/80 text-xs font-bold">
              {video.client} • {video.year}
            </span>
          </div>
          
          {/* Title - Minimal */}
          <div className="bg-white/90 backdrop-blur-sm text-black p-3 border-2 border-black max-w-xs">
            <h3 className="font-bold text-sm leading-tight mb-1">
              {video.title}
            </h3>
            <p className="text-xs text-gray-700">
              {video.description.substring(0, 60)}...
            </p>
          </div>

          {/* Contact CTA - Smaller */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onContactClick(video);
            }}
            className="bg-purple-600 text-white px-4 py-2 border-2 border-white font-bold uppercase text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WORK WITH ME</span>
          </button>
        </div>
      </div>

      {/* Minimal Progress Bar */}
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const navigateToVideo = (index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setCurrentVideoIndex(index);
    
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
    
    setTimeout(() => setIsScrolling(false), 800);
  };

  // Handle vertical touch events for video navigation
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && currentVideoIndex < videoFeedData.length - 1) {
      navigateToVideo(currentVideoIndex + 1);
    }
    if (isDownSwipe && currentVideoIndex > 0) {
      navigateToVideo(currentVideoIndex - 1);
    }
  };

  // Handle horizontal swipe to go back to main page
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleHorizontalTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleHorizontalTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleHorizontalTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isRightSwipe = distance < -100; // Increased threshold for horizontal

    if (isRightSwipe) {
      navigate('/');
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(videoFeedData.length - 1, currentVideoIndex + direction));
      
      if (newIndex !== currentVideoIndex) {
        navigateToVideo(newIndex);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' && currentVideoIndex > 0) {
        navigateToVideo(currentVideoIndex - 1);
      } else if (e.key === 'ArrowDown' && currentVideoIndex < videoFeedData.length - 1) {
        navigateToVideo(currentVideoIndex + 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentVideoIndex, isScrolling]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden pb-16"
      onTouchStart={(e) => {
        handleTouchStart(e);
        handleHorizontalTouchStart(e);
      }}
      onTouchMove={(e) => {
        handleTouchMove(e);
        handleHorizontalTouchMove(e);
      }}
      onTouchEnd={(e) => {
        handleTouchEnd();
        handleHorizontalTouchEnd();
      }}
      style={{ 
        scrollSnapType: 'y mandatory',
        touchAction: 'pan-y' // Enable vertical panning
      }}
    >
      {videoFeedData.map((video, index) => (
        <div key={video.id} style={{ scrollSnapAlign: 'start' }}>
          <VideoCard
            video={video}
            isActive={index === currentVideoIndex}
            onContactClick={onContactClick}
          />
        </div>
      ))}

      {/* Minimal Video Counter - Top Right */}
      <div className="fixed right-3 top-6 z-20">
        <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold border border-white/30">
          {currentVideoIndex + 1}/{videoFeedData.length}
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;