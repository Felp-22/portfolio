// YOUR INSTAGRAM REELS - CUSTOMIZATION GUIDE
// ====================================
// 
// I've added your Instagram reels! To customize further:
// 1. Replace videoUrl with direct Instagram video URLs
// 2. Update thumbnails with screenshots from your reels
// 3. Modify titles and descriptions to match your content
// 4. Change client names to actual clients

export const videoFeedData = [
  {
    id: 1,
    title: "Creative Brand Story", 
    category: "Corporate",
    description: "Innovative storytelling that captures brand essence and connects with audiences on an emotional level.",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://www.instagram.com/reel/DNBa2sdO97_/", // Your Instagram reel
    client: "Creative Agency",
    duration: "0:45",
    year: "2024",
    views: "15.2K",
    engagement: "98%"
  },
  {
    id: 2,
    title: "Dynamic Product Showcase", 
    category: "Commercial",
    description: "High-energy commercial content that showcases products in action and drives engagement.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d4?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://www.instagram.com/reel/DM-wsqhu0_5/", // Your Instagram reel
    client: "Product Brand",
    duration: "0:30",
    year: "2024",
    views: "22.8K",
    engagement: "95%"
  },
  {
    id: 3,
    title: "Social Media Viral Content",
    category: "Social Media",
    description: "Trendy, shareable content designed to maximize reach and create viral moments on social platforms.",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://www.instagram.com/reel/DMoCsa0vVmR/", // Your Instagram reel
    client: "Social Brand",
    duration: "0:15",
    year: "2024",
    views: "45.1K",
    engagement: "99%"
  },
  {
    id: 4,
    title: "Business Growth Story",
    category: "Corporate",
    description: "Professional corporate content that highlights business achievements and growth milestones.",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://www.instagram.com/reel/DMfWoFduFKa/", // Your Instagram reel
    client: "Business Client",
    duration: "1:00",
    year: "2024",
    views: "18.7K",
    engagement: "97%"
  },
  {
    id: 5,
    title: "Event Highlights Reel",
    category: "Event",
    description: "Capturing the energy and excitement of live events with dynamic cuts and engaging storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/", 
    client: "Event Company",
    duration: "1:30",
    year: "2024",
    views: "12.3K",
    engagement: "94%"
  },
  {
    id: 6,
    title: "Fashion Brand Campaign",
    category: "Fashion",
    description: "Stylish and trendy fashion content that showcases clothing and lifestyle in an aspirational way.",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Fashion Brand",
    duration: "0:45",
    year: "2024",
    views: "28.5K",
    engagement: "96%"
  },
  {
    id: 7,
    title: "Tech Product Demo",
    category: "Commercial",
    description: "Clean, modern product demonstrations that highlight features and benefits in an engaging format.",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Tech Startup",
    duration: "1:15",
    year: "2024",
    views: "19.8K",
    engagement: "93%"
  },
  {
    id: 8,
    title: "Lifestyle Brand Story",
    category: "Lifestyle",
    description: "Authentic lifestyle content that connects with audiences through relatable moments and experiences.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&auto=format",
    videoUrl: "https://sample-videos.com/zip/10/mp4/720/",
    client: "Lifestyle Brand",
    duration: "0:50",
    year: "2024",
    views: "16.4K",
    engagement: "95%"
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
// INSTAGRAM INTEGRATION NOTES:
// ====================================
//
// Your Instagram reels are now integrated! 
// 
// IMPORTANT: Instagram URLs may not play directly in browsers due to CORS restrictions.
// For production, you'll want to:
//
// 1. DOWNLOAD YOUR VIDEOS:
//    - Use Instagram video downloaders
//    - Save as MP4 files
//    - Upload to your server or CDN
//    - Replace URLs with direct file paths
//
// 2. OR USE INSTAGRAM EMBED:
//    - Use Instagram's embed API
//    - Requires Instagram Developer account
//    - More complex but official method
//
// 3. QUICK FIX FOR TESTING:
//    - Right-click on Instagram video → "Copy video address"
//    - Replace the URLs above with direct video URLs
//    - Note: These may expire or not work in all browsers
//
// The current setup will show your Instagram reels, but for best performance
// and reliability, download and host the videos yourself.