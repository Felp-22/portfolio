import React, { useState, useEffect, useRef } from "react";
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
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false);
      });
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
    <div className="relative w-full h-screen flex-shrink-0 bg-black overflow-hidden">
      {/* Video Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
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
        {/* Mock video source - in real implementation, this would be actual video files */}
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div 
        className="absolute inset-0 flex flex-col justify-between p-4 z-10"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={togglePlay}
      >
        {/* Top Section - Branding */}
        <div className="flex justify-between items-start">
          <div className={`transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-white font-bold text-2xl">Felp</h1>
          </div>
          
          {/* Video Controls */}
          <div className={`flex gap-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Center Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm text-white p-8 rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
            >
              <Play className="h-12 w-12 ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Section - Video Info & Actions */}
        <div className="space-y-4">
          {/* Video Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {video.category}
              </span>
              <span className="text-white/80 text-sm">{video.duration}</span>
            </div>
            
            <h3 className="text-white font-bold text-xl leading-tight">
              {video.title}
            </h3>
            
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              {video.description}
            </p>
            
            <div className="text-white/70 text-xs">
              {video.client} • {video.year}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onContactClick(video);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Let's Work Together
            </button>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300"
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
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout;
    const handleScroll = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(videoFeedData.length - 1, currentVideoIndex + direction));
        
        if (newIndex !== currentVideoIndex) {
          setIsScrolling(true);
          setCurrentVideoIndex(newIndex);
          
          container.scrollTo({
            top: newIndex * window.innerHeight,
            behavior: 'smooth'
          });
          
          setTimeout(() => setIsScrolling(false), 800);
        }
      }, 50);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const newIndex = Math.max(0, Math.min(videoFeedData.length - 1, currentVideoIndex + direction));
        
        if (newIndex !== currentVideoIndex) {
          setCurrentVideoIndex(newIndex);
          container.scrollTo({
            top: newIndex * window.innerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentVideoIndex, isScrolling]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden"
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
    </div>
  );
};

export default VideoFeed;