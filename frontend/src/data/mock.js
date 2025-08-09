// YOUR INSTAGRAM REELS PORTFOLIO
// ====================================
// 
// Your Instagram reels have been integrated!
// Note: Instagram URLs may not work directly due to CORS restrictions.
// For production, download these videos and host them on your server.

export const videoFeedData = [
  {
    id: 1,
    title: "Creative Brand Story", 
    category: "Reel",
    description: "Innovative storytelling that captures brand essence and connects with audiences on an emotional level.",
    // Using a placeholder video that will actually play - replace with your downloaded Instagram video
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    client: "Creative Agency",
    duration: "0:45",
    year: "2024",
    views: "15.2K",
    engagement: "98%"
  },
  {
    id: 2,
    title: "Dynamic Product Showcase", 
    category: "Reel",
    description: "High-energy commercial content that showcases products in action and drives engagement.",
    // Using a placeholder video that will actually play
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    client: "Product Brand",
    duration: "0:30",
    year: "2024",
    views: "22.8K",
    engagement: "95%"
  },
  {
    id: 3,
    title: "Social Media Viral Content",
    category: "Reel",
    description: "Trendy, shareable content designed to maximize reach and create viral moments on social platforms.",
    // Using a placeholder video that will actually play
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    client: "Social Brand",
    duration: "0:15",
    year: "2024",
    views: "45.1K",
    engagement: "99%"
  },
  {
    id: 4,
    title: "Business Growth Story",
    category: "Reel",
    description: "Professional corporate content that highlights business achievements and growth milestones.",
    // Using a placeholder video that will actually play
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    client: "Business Client",
    duration: "1:00",
    year: "2024",
    views: "18.7K",
    engagement: "97%"
  }
];

// ====================================
// CONTACT INFORMATION
// ====================================

export const contactInfo = {
  email: "hello@felp.video",
  phone: "+1 (555) 123-4567",
  location: "Los Angeles, CA",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/felp.video", handle: "@felp.video" },
    { platform: "TikTok", url: "https://tiktok.com/@felp.video", handle: "@felp.video" },
    { platform: "YouTube", url: "https://youtube.com/felp", handle: "Felp Video" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/felp", handle: "Felp" }
  ]
};

// ====================================
// INSTAGRAM INTEGRATION INSTRUCTIONS:
// ====================================
//
// TO ADD YOUR ACTUAL INSTAGRAM VIDEOS:
//
// 1. DOWNLOAD YOUR INSTAGRAM REELS:
//    - Use tools like: 4K Video Downloader, SnapInsta, or similar
//    - Download these URLs:
//      * https://www.instagram.com/reel/DNBa2sdO97_/
//      * https://www.instagram.com/reel/DM-wsqhu0_5/
//      * https://www.instagram.com/reel/DMoCsa0vVmR/
//      * https://www.instagram.com/reel/DMfWoFduFKa/
//
// 2. HOST THE VIDEOS:
//    - Upload to your server in /public/videos/ folder
//    - Or use a CDN like Cloudflare, AWS S3, etc.
//    - Replace the videoUrl above with your hosted URLs
//
// 3. EXAMPLE:
//    videoUrl: "/videos/my-instagram-reel-1.mp4"
//    videoUrl: "https://your-cdn.com/videos/reel-1.mp4"
//
// The current placeholder videos will auto-play and demonstrate
// the swipe functionality. Replace them with your actual content!