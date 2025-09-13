import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GithubIcon, Play, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjectImages } from "@/firebase/storage";

const projects = [
  {
    id: 1,
    title: "Unibites-A all in one for food needs ",
    description: "UniBites is a modern, feature-rich Android food ordering application that brings your favorite meals right to your fingertips. Built with cutting-edge technology and designed for seamless user experience.",
    image: "My Projects/unibytes2.png",
    technologies: ["Kotlin", "Java", "Android", "TensorFlow"],
    category: "Android developement ",
    status: "Live",
    links: {
      live: "#",
      github: "https://github.com/Akshitwadhwa/Unibites--A-all-in-one-for-food-needs",

    }
  },
  {
    id: 2,
    title: "Event Management Platform",
    description: "Comprehensive platform for managing events, including ticketing, scheduling, and attendee engagement.",
    image: "My Projects/Make All Stops.png",
    technologies: ["HTML", "CSS", "Javascript", "MongoDB ", "Express.JS"],
    category: "Web Development",
    status: "Live",
    links: {
      live: "https://project-for-web-dev.vercel.app",
      github: "https://github.com/Akshitwadhwa/project-for-web-dev"
    }
  },
  {
    id: 3,
    title: "Make all stops-- Content Dashboard",
    description: "A modern , responsive web platform designed to help creators and businesses master short-form content.",
    image: "My Projects/A million miles.png",
    technologies: ["HTML", "CSS", "Node.js", "Javascript", "Firebase"],
    category: "Data Analytics",
    status: "Live",
    links: {
      live: "#",
      github: "https://github.com/Akshitwadhwa/A_Million_Miles-We-take-your-story-further"
    }
  },
  {
    id: 4,
    title: "AeroConnect",
    description: "Live flight tracking with up-to-the-minute departure and arrival information",
    image: "My Projects/Aerconnect.png",
    technologies: ["React", "Vite", "Firebase", "Redis", "Docker"],
    category: "Solo",
    status: "Development",
    links: {
      live: "#",
      github: "https://github.com/Akshitwadhwa/AeroConnect_Vibe"
    }
  },
  {
    id: 5,
    title: "Enercore Pvt Limited",
    description: "Internship Website For Enercore Private Limited",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "Arduino", "WebRTC"],
    category: "IoT & Hardware",
    status: "Prototype",
    links: {
      live: "https://enercore-pvt-limited.vercel.app/Sparsh.html",
      github: "https://github.com/Akshitwadhwa/enercore-pvt-limited",
      
    }
  },
  {
    id: 6,
    title: "Content Management System",
    description: "Headless CMS specifically designed for media professionals with advanced asset management and workflow automation.",
    image: "/api/placeholder/400/250",
    technologies: ["Strapi", "GraphQL", "React", "PostgreSQL", "CloudFlare"],
    category: "Backend Development",
    status: "Live",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 7,
    title: "Social Media Scheduler",
    description: "Cross-platform social media management tool with AI-powered content suggestions and optimal posting time predictions.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Node.js", "MongoDB", "Twitter API", "Instagram API"],
    category: "Mobile Development",
    status: "Live",
    links: {
      live: "#",
      github: "#",
      demo: "#"
    }
  },
  {
    id: 8,
    title: "E-commerce Analytics Engine",
    description: "Real-time analytics platform for e-commerce businesses with predictive sales forecasting and customer behavior analysis.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Pandas", "Scikit-learn", "FastAPI", "PostgreSQL"],
    category: "Data Analytics",
    status: "Live",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 9,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology with smart contracts for election integrity.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "Blockchain",
    status: "Prototype",
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Work = () => {
  const [projectImages, setProjectImages] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Get all project image paths
        const imagePaths = projects.map(project => project.image);
        // Fetch all images from Firebase
        const images = await getProjectImages(imagePaths);

        // Create a map of image paths to URLs
        const imageMap = images.reduce((acc: { [key: string]: string }, img) => {
          acc[img.path] = img.url;
          return acc;
        }, {});

        setProjectImages(imageMap);
      } catch (error) {
        console.error('Error loading project images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Prototype":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Open Source":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Machine Learning": "bg-purple-500/10 text-purple-400",
      "Web Development": "bg-blue-500/10 text-blue-400",
      "Data Analytics": "bg-green-500/10 text-green-400",
      "Collaboration": "bg-orange-500/10 text-orange-400",
      "IoT & Hardware": "bg-red-500/10 text-red-400",
      "Backend Development": "bg-cyan-500/10 text-cyan-400",
      "Mobile Development": "bg-pink-500/10 text-pink-400",
      "Blockchain": "bg-yellow-500/10 text-yellow-400",
      "DevOps": "bg-indigo-500/10 text-indigo-400",
      "AR/VR": "bg-violet-500/10 text-violet-400",
      "Fintech": "bg-emerald-500/10 text-emerald-400",
      "Open Source": "bg-teal-500/10 text-teal-400"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-400";
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-12 perspective-1000">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-foreground to-accent bg-clip-text text-transparent transform-gpu hover:scale-105 transition-transform duration-500">
          Featured Work
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto transform-gpu hover:translate-z-2 transition-transform duration-500">
          Explore my latest projects spanning machine learning, web development, and creative technology solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group card-3d hover:shadow-2xl hover:shadow-primary/20 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer glow-3d"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-lg h-48 image-3d">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <ImageIcon className="w-8 h-8 animate-pulse text-muted-foreground" />
                </div>
              ) : projectImages[project.image] ? (
                <div className="relative w-full h-full">
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
              )}

              {/* Project Links Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90 hover:bg-background button-3d shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90 hover:bg-background button-3d shadow-lg hover:shadow-xl"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90 hover:bg-background button-3d shadow-lg hover:shadow-xl"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>

            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className={`${getCategoryColor(project.category)} badge-3d`}>
                  {project.category}
                </Badge>
                <Badge variant="outline" className={`${getStatusColor(project.status)} badge-3d`}>
                  {project.status}
                </Badge>
              </div>

              <CardTitle className="text-xl group-hover:text-primary transition-all duration-300">
                {project.title}
              </CardTitle>

              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-muted/50 hover:bg-muted badge-3d"
                    style={{ 
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-12">
        <h3 className="text-2xl font-semibold">Interested in collaborating?</h3>
        <p className="text-muted-foreground">
          Let's discuss how we can bring your creative vision to life.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
          Start a Project
        </Button>
      </div>
    </div>
  );
};

export default Work;