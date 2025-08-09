// YOUR INSTAGRAM REELS PORTFOLIO
// ====================================
// 
// Clean, minimal video data without unnecessary metadata

export const videoFeedData = [
  {
    id: 1,
    title: "VIDEO PARA BARBEÁRIA", 
    category: "Reel",
    description: "Video feito para apresentar a babearia e localização..",
    videoUrl: "https://res.cloudinary.com/dku137ezv/video/upload/v1754760318/video_loc_paulo_2_smxfol.mov",
    client: "Paulo Áylla"
  },
  {
    id: 2,
    title: "VIDEO PARA BARBEÁRIA", 
    category: "Reel",
    description: "Video meme feito pra atrair e engajar o publico..",
    videoUrl: "https://res.cloudinary.com/dku137ezv/video/upload/v1754756458/video_meme_paulo_wqc9rl.mov",
    client: "Paulo Áylla"
  },
  {
    id: 3,
    title: "VIDEO PARA BARBEÁRIA",
    category: "Reel",
    description: "Video mostrando o processo e resultado do corte.",
    videoUrl: "https://res.cloudinary.com/dku137ezv/video/upload/v1754760674/video_paulo_3_dxjvhw.mov",
    client: "Paulo Áylla"
  },
  {
    id: 4,
    title: "VIDEO PARA BARBEÁRIA",
    category: "Reel",
    description: "Video mostrando o processo e resultado do corte.",
    videoUrl: "https://res.cloudinary.com/dku137ezv/video/upload/v1754760344/paulo_video_v2_z9zhwj.mp4",
    client: "Paulo Áylla"
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
// The data structure is now clean and minimal - just what you need!