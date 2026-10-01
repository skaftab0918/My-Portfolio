// Add/remove/reorder featured projects here. First two render as large case studies, the rest as medium cards.
// To add a screenshot: put the image in /public/projects and set image: "/projects/name.png"
export const projects = [
  {
    id: "trrip", title: "Trrip", category: "AI Travel Itinerary Generator",
    description: "An AI-powered travel itinerary generator that extracts travel information from uploaded flight and hotel documents and generates a structured day-by-day itinerary.",
    note: "Separate client and server applications, using Gemini AI for extraction and itinerary generation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API", "JWT", "Multer"],
    features: ["Upload PDF/images", "AI-powered document extraction", "Gemini API integration", "Automatic itinerary generation", "JWT authentication", "MongoDB itinerary history", "Public itinerary sharing", "Async processing", "Status polling"],
    github: "https://github.com/skaftab0918/Travel-Ai-Itinerary",
    live: "https://travel-ai-itinerary-three.vercel.app/", image: "/projects/trip.png",
  },
  {
    id: "studynotion", title: "StudyNotion", category: "EdTech Learning Platform",
    description: "A full-stack EdTech platform designed for course creation, learning, user dashboards and online payments.",
    note: "My contribution was primarily the frontend and integrating it with the backend APIs.",
    tech: ["React.js", "Redux", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Cloudinary"],
    features: ["User authentication", "Course creation", "Course consumption", "Student dashboard", "Course ratings/reviews", "Payment integration", "Cloud media management", "Responsive interface"],
    github: "https://github.com/skaftab0918/StudyNotion",
    live: "https://studynotion-sk-psi.vercel.app/", image: "/projects/StudyNotion.png",
  },
  {
    id: "chatapp", title: "ChatApp", category: "Real-Time Messaging Application",
    description: "A real-time messaging application designed for one-to-one and group conversations.",
    tech: ["React.js", "Socket.IO", "Redis"],
    features: ["One-to-one messaging", "Group conversations", "Real-time communication", "Responsive interface"],
    github: "https://github.com/skaftab0918/ChatApp", live: "https://chatapp-gyh7.onrender.com/", image: "/projects/ChatApp.png",
  },
  {
    id: "codereview",
  title: "CodeReview AI",
  category: "AI Code Review Assistant",
  description: "An AI-powered code review tool that analyses code in a split-panel editor and returns a quality score with issue cards and suggested fixes.",
  tech: ["React.js", "Vite", "Tailwind CSS", "Gemini API"],
  features: [
    "Split-panel editor interface",
    "Multi-language support",
    "Code quality scoring",
    "Issue cards with fix suggestions",
    "Structured JSON output from Gemini",
    "Deployed on Vercel",
  ],
    github: "https://github.com/skaftab0918/CodeReview-AI", live: "https://code-review-ai-pi-lyart.vercel.app/", image: "/projects/codeReviewAi.png",
  },
];
