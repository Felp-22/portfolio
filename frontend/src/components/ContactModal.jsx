import React, { useState } from "react";
import { X, Send, Play } from "lucide-react";
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

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎬",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-gray-200 dark:border-gray-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Let's Create Together
          </h2>
          
          {selectedVideo && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
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
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  Inspired by: {selectedVideo.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  {selectedVideo.category} • {selectedVideo.client}
                </p>
              </div>
            </div>
          )}
          
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Ready to bring your vision to life? Let's discuss your project.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full dark:bg-gray-800 dark:border-gray-700"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select project type</option>
              <option value="corporate">Corporate Video</option>
              <option value="commercial">Commercial</option>
              <option value="social">Social Media Content</option>
              <option value="event">Event Coverage</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tell me about your project *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full dark:bg-gray-800 dark:border-gray-700"
              placeholder="Describe your vision, goals, timeline, and any specific requirements..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Quick Contact */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Prefer to email directly? 
            <a href="mailto:hello@felp.video" className="text-blue-600 hover:text-blue-700 ml-1">
              hello@felp.video
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;