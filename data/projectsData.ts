export interface Project {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  img: string;
  isSpecial?: boolean;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "skillswap",
    tag: "MERN STACK",
    title: "SkillSwap Community",
    shortDesc: "A community skill exchange platform offering dynamic skill filtering, real-time messaging, and secure JWT authentication.",
    fullDesc: "SkillSwap Community is a comprehensive platform designed to connect skilled professionals with learners. Built with the MERN stack, it features real-time messaging, advanced skill filtering, secure JWT authentication, and a dynamic user community. Users can offer and request skills, connect with others, and build a professional network.",
    img: "/assests/skillswap.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.io"],
    liveLink: "https://skillswap-community.com",
    githubLink: "https://github.com/anishkumar",
    features: [
      "Real-time messaging system",
      "Advanced skill filtering",
      "User profiles with ratings",
      "JWT secure authentication",
      "Community support"
    ]
  },
  {
    id: "portfolio",
    tag: "REACT & TAILWIND",
    title: "Developer Portfolio",
    shortDesc: "A modern developer portfolio built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    fullDesc: "An elegant and modern developer portfolio showcasing projects, skills, and experience. Built with React and Tailwind CSS with Framer Motion animations for smooth transitions. Features responsive design, dark mode support, and optimized performance. This portfolio serves as a great example of modern web design practices.",
    img: "assests/portfolio.png",
    isSpecial: true,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
    liveLink: "https://anishkumar.dev",
    githubLink: "https://github.com/anishkumar/portfolio",
    features: [
      "Smooth animations",
      "Dark mode support",
      "Responsive design",
      "SEO optimized",
      "Fast performance"
    ]
  },
  {
    id: "plantation",
    tag: "FRONTEND PLATFORM",
    title: "Plantation At Home",
    shortDesc: "Plantation At Home is a modern web platform for discovering and learning about indoor and outdoor plants. Users can browse a dynamic catalog, request air quality tests, and access plant care guides.",
    fullDesc: "Plantation At Home is an innovative web platform dedicated to plant enthusiasts. It provides a comprehensive catalog of indoor and outdoor plants with detailed care instructions, air quality testing requests, and educational resources. The platform helps users discover new plants and maintain their green spaces effectively. No direct selling is enabled on the platform.",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
    liveLink: "https://plantationathome.com",
    githubLink: "https://github.com/anishkumar/plantation",
    features: [
      "Dynamic plant catalog",
      "Air quality testing",
      "Care guides",
      "User preferences",
      "Educational resources"
    ]
  }
];
