import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, VolumeX, MessageCircle, ChevronUp, ChevronDown } from "lucide-react";
import { videoFeedData } from "../data/mock";

const VideoCard = ({ video, isActive, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
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
      }, 500);
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

  return (
    <div className="relative w-full h-screen flex-shrink-0 bg-black overflow-hidden border-8 border-black dark:border-white">
      {/* Video Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Mock Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        muted={isMuted}
        loop
        playsInline
        poster={video.thumbnail}
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Neobrutalism UI Overlays */}
      <div 
        className="absolute inset-0 flex flex-col justify-between p-4 z-10"
        onTouchStart={() => setShowControls(!showControls)}
        onClick={togglePlay}
      >
        {/* Top Section - Category & Controls */}
        <div className="flex justify-between items-start">
          <div className="bg-blue-600 text-white px-4 py-2 border-4 border-white font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            {video.category}
          </div>
          
          {/* Video Controls */}
          <div className={`flex gap-2 transition-opacity duration-300 ${showControls || !isActive ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="bg-black text-white p-3 border-4 border-white font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Center Play Button - Neobrutalism Style */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-red-500 text-white p-8 border-8 border-white font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Play className="h-16 w-16 ml-2" />
            </button>
          </div>
        )}

        {/* Bottom Section - Video Info & Action */}
        <div className="space-y-4 pb-24">
          {/* Duration Badge */}
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 text-black px-3 py-1 border-3 border-black font-black text-sm uppercase">
              {video.duration}
            </div>
            <div className="bg-green-500 text-white px-3 py-1 border-3 border-white font-black text-sm uppercase">
              {video.year}
            </div>
          </div>
          
          {/* Title - Neobrutalism Typography */}
          <div className="bg-white text-black p-4 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 max-w-xs">
            <h3 className="font-black text-xl leading-tight uppercase mb-2">
              {video.title}
            </h3>
            <p className="font-bold text-sm">
              {video.description.substring(0, 80)}...
            </p>
            <div className="text-xs font-black uppercase mt-2 text-gray-600">
              {video.client}
            </div>
          </div>

          {/* Contact CTA - Neobrutalism Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onContactClick(video);
            }}
            className="bg-purple-600 text-white px-8 py-4 border-6 border-white font-black uppercase text-lg flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="h-6 w-6" />
            <span>LET'S WORK!</span>
          </button>
        </div>
      </div>

      {/* Progress Bar - Neobrutalism Style */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-800 border-t-4 border-white">
        <div 
          className="h-full bg-red-500 transition-all duration-300 border-r-4 border-black"
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

  // Handle touch events for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe && currentVideoIndex < videoFeedData.length - 1) {
      navigateToVideo(currentVideoIndex + 1);
    }
    if (isDownSwipe && currentVideoIndex > 0) {
      navigateToVideo(currentVideoIndex - 1);
    }
  };

  // Swipe right to go back to main page
  const onTouchStartHorizontal = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHorizontal = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHorizontal = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isRightSwipe = distance < -50;

    if (isRightSwipe) {
      navigate('/');
    }
  };

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
      className="h-screen overflow-hidden pb-24"
      onTouchStart={(e) => {
        onTouchStart(e);
        onTouchStartHorizontal(e);
      }}
      onTouchMove={(e) => {
        onTouchMove(e);
        onTouchMoveHorizontal(e);
      }}
      onTouchEnd={(e) => {
        onTouchEnd();
        onTouchEndHorizontal();
      }}
      style={{ scrollSnapType: 'y mandatory' }}
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

      {/* Navigation Hints - Neobrutalism Style */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        <button
          onClick={() => currentVideoIndex > 0 && navigateToVideo(currentVideoIndex - 1)}
          className={`bg-yellow-400 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            currentVideoIndex === 0 ? 'opacity-30' : 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1'
          }`}
          disabled={currentVideoIndex === 0}
        >
          <ChevronUp className="h-6 w-6 text-black" />
        </button>
        
        <button
          onClick={() => currentVideoIndex < videoFeedData.length - 1 && navigateToVideo(currentVideoIndex + 1)}
          className={`bg-yellow-400 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            currentVideoIndex === videoFeedData.length - 1 ? 'opacity-30' : 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1'
          }`}
          disabled={currentVideoIndex === videoFeedData.length - 1}
        >
          <ChevronDown className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Video Counter */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="bg-red-500 text-white px-4 py-2 border-4 border-white font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-90">
          {currentVideoIndex + 1}/{videoFeedData.length}
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;