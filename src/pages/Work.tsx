import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Unibites-A all in one for food needs ",
    description: "Advanced video editing platform with machine learning capabilities for automatic scene detection and smart editing suggestions.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "FFmpeg"],
    category: "Machine Learning",
    status: "Live",
    links: {
      live: "#",
      github: "#",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Cinematic Portfolio Platform",
    description: "Modern portfolio showcase for photographers and videographers with advanced gallery features and client collaboration tools.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    category: "Web Development",
    status: "In Development",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Music Video Analytics",
    description: "Comprehensive analytics dashboard for music video performance tracking across multiple platforms with AI-driven insights.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "YouTube API"],
    category: "Data Analytics",
    status: "Live",
    links: {
      live: "#",
      github: "#",
      demo: "#"
    }
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Collaborative workspace for creative teams with real-time editing, version control, and project management features.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Socket.io", "Express", "Redis", "Docker"],
    category: "Collaboration",
    status: "Live",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 5,
    title: "Automated Gimbal Control",
    description: "IoT solution for automated gimbal operations using computer vision and motion tracking for professional cinematography.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Arduino", "WebRTC"],
    category: "IoT & Hardware",
    status: "Prototype",
    links: {
      github: "#",
      demo: "#"
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
  }
];

const Work = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Prototype":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
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
      "Backend Development": "bg-cyan-500/10 text-cyan-400"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-400";
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-foreground to-accent bg-clip-text text-transparent">
          Featured Work
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my latest projects spanning machine learning, web development, and creative technology solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Project Links Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.links.live && (
                  <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {project.links.github && (
                  <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                    <Github className="h-4 w-4" />
                  </Button>
                )}
                {project.links.demo && (
                  <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                    <Play className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className={getCategoryColor(project.category)}>
                  {project.category}
                </Badge>
                <Badge variant="outline" className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
              
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs bg-muted/50 hover:bg-muted transition-colors"
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