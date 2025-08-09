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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content - Mobile Optimized */}
      <div className="relative bg-yellow-300 dark:bg-gray-900 border-4 border-black dark:border-white w-full max-w-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] max-h-[90vh] overflow-y-auto">
        {/* Header - Compact */}
        <div className="flex items-center justify-between p-3 border-b-2 border-black dark:border-white">
          <div>
            <h2 className="text-black dark:text-white font-black text-lg uppercase leading-tight">
              LET'S CREATE!
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Selected Video Preview - Compact */}
        {selectedVideo && (
          <div className="p-3 border-b-2 border-black dark:border-white">
            <div className="bg-blue-600 text-white p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 border-2 border-white overflow-hidden">
                  <img 
                    src={selectedVideo.thumbnail} 
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xs uppercase mb-1">
                    INSPIRED BY:
                  </p>
                  <p className="font-bold text-sm leading-tight">
                    {selectedVideo.title.substring(0, 20)}...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form - Compact */}
        <form onSubmit={handleSubmit} className="p-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-black dark:text-white font-bold uppercase text-xs mb-1">
                NAME *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border-2 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-sm py-2"
                placeholder="YOUR NAME"
              />
            </div>
            <div>
              <label className="block text-black dark:text-white font-bold uppercase text-xs mb-1">
                EMAIL *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border-2 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-sm py-2"
                placeholder="EMAIL"
              />
            </div>
          </div>

          <div>
            <label className="block text-black dark:text-white font-bold uppercase text-xs mb-1">
              PROJECT TYPE
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-2 py-2 border-2 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black dark:text-white uppercase text-sm"
            >
              <option value="">SELECT PROJECT</option>
              <option value="corporate">CORPORATE</option>
              <option value="commercial">COMMERCIAL</option>
              <option value="social">SOCIAL MEDIA</option>
              <option value="event">EVENT</option>
              <option value="other">OTHER</option>
            </select>
          </div>

          <div>
            <label className="block text-black dark:text-white font-bold uppercase text-xs mb-1">
              YOUR IDEA *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={3}
              className="border-2 border-black dark:border-white font-bold bg-white dark:bg-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-sm"
              placeholder="DESCRIBE YOUR PROJECT..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white py-3 border-3 border-black dark:border-white font-black uppercase text-sm flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] active:translate-x-1 active:translate-y-1 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                SENDING...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4" />
                SEND MESSAGE
              </>
            )}
          </button>
        </form>

        {/* Footer - Compact */}
        <div className="p-3 border-t-2 border-black dark:border-white bg-black dark:bg-white">
          <p className="text-white dark:text-black font-bold text-center uppercase text-xs">
            Email: 
            <a href="mailto:hello@felp.video" className="text-yellow-400 dark:text-yellow-600 ml-1">
              HELLO@FELP.VIDEO
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;