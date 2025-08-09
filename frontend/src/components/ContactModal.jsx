import React, { useState } from "react";
import { X, Send, Play, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const ContactModal = ({ isOpen, onClose, selectedVideo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "MESSAGE SENT! 🚀",
        description: "I'll get back to you within 24 hours to discuss your project.",
      });
      
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: ""
      });
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content - Neobrutalism Style */}
      <div className="relative bg-yellow-300 dark:bg-gray-900 border-8 border-black dark:border-white max-w-lg w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-black dark:border-white">
          <div>
            <h2 className="text-black dark:text-white font-black text-3xl uppercase leading-tight">
              LET'S CREATE<br/>TOGETHER!
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:transform hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Selected Video Preview */}
        {selectedVideo && (
          <div className="p-6 border-b-4 border-black dark:border-white">
            <div className="bg-blue-600 text-white p-4 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 border-4 border-white overflow-hidden">
                  <img 
                    src={selectedVideo.thumbnail} 
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-black text-sm uppercase mb-1">
                    INSPIRED BY:
                  </p>
                  <p className="font-bold text-lg leading-tight">
                    {selectedVideo.title}
                  </p>
                  <p className="text-sm font-bold">
                    {selectedVideo.category} • {selectedVideo.client}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black dark:text-white font-black uppercase text-sm mb-2">
                NAME *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border-4 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                placeholder="YOUR NAME"
              />
            </div>
            <div>
              <label className="block text-black dark:text-white font-black uppercase text-sm mb-2">
                EMAIL *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border-4 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                placeholder="YOUR@EMAIL.COM"
              />
            </div>
          </div>

          <div>
            <label className="block text-black dark:text-white font-black uppercase text-sm mb-2">
              PROJECT TYPE
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-4 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] text-black dark:text-white uppercase"
            >
              <option value="">SELECT PROJECT TYPE</option>
              <option value="corporate">CORPORATE VIDEO</option>
              <option value="commercial">COMMERCIAL</option>
              <option value="social">SOCIAL MEDIA CONTENT</option>
              <option value="event">EVENT COVERAGE</option>
              <option value="other">OTHER</option>
            </select>
          </div>

          <div>
            <label className="block text-black dark:text-white font-black uppercase text-sm mb-2">
              YOUR PROJECT IDEA *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="border-4 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
              placeholder="DESCRIBE YOUR VISION, GOALS, TIMELINE, AND ANY SPECIFIC REQUIREMENTS..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white py-4 border-6 border-black dark:border-white font-black uppercase text-xl flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white"></div>
                SENDING...
              </>
            ) : (
              <>
                <Zap className="h-6 w-6" />
                SEND MESSAGE
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="p-6 border-t-4 border-black dark:border-white bg-black dark:bg-white">
          <p className="text-white dark:text-black font-bold text-center uppercase text-sm">
            Direct Email: 
            <a href="mailto:hello@felp.video" className="text-yellow-400 dark:text-yellow-600 ml-2 underline">
              HELLO@FELP.VIDEO
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;