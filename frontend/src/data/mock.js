// SIMPLE VIDEO CUSTOMIZATION GUIDE
// ====================================
// 
// To add your own social media videos:
// 1. Replace the thumbnail URLs with screenshots of your videos
// 2. Update video titles and descriptions 
// 3. Change client names to your actual clients
// 4. For social media videos, you can use:
//    - Instagram video URLs
//    - TikTok video URLs  
//    - YouTube video URLs
//    - Direct MP4 file links
//
// Example of how to customize each video:

export const videoFeedData = [
  {
    id: 1,
    title: "TechStart's App Launch Story", // CHANGE THIS: Your video title
    category: "Corporate", // CHANGE THIS: Corporate, Commercial, Social Media, Real Estate, Fashion
    description: "From idea to launch - capturing the journey of a startup that's changing productivity forever.", // CHANGE THIS: Your video description
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format", // CHANGE THIS: Screenshot of your video
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/", // CHANGE THIS: Your social media video URL or file
    client: "TechStart Inc.", // CHANGE THIS: Your client name
    duration: "2:30", // CHANGE THIS: Video duration
    year: "2024", // CHANGE THIS: Year created
    views: "12.5K", // CHANGE THIS: View count (optional)
    engagement: "98%" // CHANGE THIS: Engagement rate (optional)
  },
  {
    id: 2,
    title: "Artisan Bread, Endless Passion", 
    category: "Commercial", 
    description: "The smell, the texture, the love. A bakery's story told through the hands that craft it daily.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d4?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Sweet Dreams Bakery",
    duration: "1:45", 
    year: "2024",
    views: "8.3K",
    engagement: "95%"
  },
  {
    id: 3,
    title: "Transform Your Body, Transform Your Life",
    category: "Social Media",
    description: "Real people, real transformations. The fitness journey that inspired thousands to start moving.",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "PowerFit Studio",
    duration: "0:60",
    year: "2024",
    views: "25.1K",
    engagement: "99%"
  },
  {
    id: 4,
    title: "Four Generations, One Kitchen",
    category: "Corporate",
    description: "A family restaurant where recipes are memories and every dish tells a story of heritage.",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Nonna's Kitchen",
    duration: "3:15",
    year: "2023",
    views: "15.7K", 
    engagement: "97%"
  },
  {
    id: 5,
    title: "Luxury Redefined",  
    category: "Real Estate",
    description: "Not just a house. A sanctuary. Where architecture meets aspiration in perfect harmony.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Elite Realty Group",
    duration: "4:00",
    year: "2023", 
    views: "19.2K",
    engagement: "94%"
  },
  {
    id: 6,
    title: "Street Style Revolution",
    category: "Fashion",
    description: "When fashion meets the streets. Bold choices, authentic style, unstoppable confidence.",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Urban Threads",
    duration: "2:45",
    year: "2023",
    views: "31.8K",
    engagement: "96%"
  },
  {
    id: 7,
    title: "Coffee Culture Awakening",
    category: "Commercial",
    description: "More than caffeine. It's community, craft, and the perfect moment to pause in a busy world.",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Brew & Bond Cafe",
    duration: "1:30", 
    year: "2024",
    views: "22.4K",
    engagement: "98%"
  },
  {
    id: 8,
    title: "Innovation in Motion",
    category: "Corporate", 
    description: "The future isn't coming - it's here. How one team is building tomorrow, today.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "NextGen Solutions",
    duration: "2:15",
    year: "2024",
    views: "18.6K",
    engagement: "97%"
  }
];

// ====================================
// CONTACT INFORMATION
// ====================================
// Update this with your actual contact info:

export const contactInfo = {
  email: "hello@felp.video", // CHANGE THIS: Your email
  phone: "+1 (555) 123-4567", // CHANGE THIS: Your phone
  location: "Los Angeles, CA", // CHANGE THIS: Your location
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/felp.video", handle: "@felp.video" }, // CHANGE THIS
    { platform: "TikTok", url: "https://tiktok.com/@felp.video", handle: "@felp.video" }, // CHANGE THIS
    { platform: "YouTube", url: "https://youtube.com/felp", handle: "Felp Video" }, // CHANGE THIS
    { platform: "LinkedIn", url: "https://linkedin.com/in/felp", handle: "Felp" } // CHANGE THIS
  ]
};

// ====================================
// HOW TO ADD SOCIAL MEDIA VIDEOS:
// ====================================
//
// INSTAGRAM: 
// - Right-click on Instagram video → "Copy video address"
// - Use that URL in videoUrl field
//
// TIKTOK:
// - Use TikTok video URL directly
// - Or download and upload to your server
//
// YOUTUBE:
// - Use YouTube video URL
// - For better performance, use YouTube embed URLs
//
// CUSTOM VIDEOS:
// - Upload your MP4 files to a folder like /public/videos/
// - Use relative paths like "/videos/my-video.mp4"
//
// THUMBNAILS:
// - Take screenshots of your videos
// - Upload to image hosting service (Cloudinary, AWS S3, etc.)
// - Or use relative paths like "/images/thumbnail1.jpg"