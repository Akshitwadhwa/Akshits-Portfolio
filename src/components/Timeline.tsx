import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Full Stack Developer & Cinematographer",
    company: "Freelance & Creative Studio",
    description: "Leading full-stack development projects while directing music videos and commercials. Specializing in AI-powered applications and cinematic storytelling.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "Node.js", "AWS"],
    achievements: [
      "Developed AI-powered video editing platform",
      "Directed 15+ music videos with 2M+ combined views",
      "Built automated gimbal control system using computer vision"
    ],
    link: "#"
  },
  {
    year: "2023",
    title: "Technical Lead & Creative Director",
    company: "Digital Media Solutions",
    description: "Led cross-functional teams in developing innovative media solutions while overseeing creative video production for major clients.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Docker", "WebRTC"],
    achievements: [
      "Launched collaborative workspace platform for creative teams",
      "Increased client video engagement by 300%",
      "Implemented real-time collaboration features"
    ],
    link: "#"
  },
  {
    year: "2022",
    title: "Full Stack Developer & Videographer",
    company: "Tech Startup & Production House",
    description: "Developed scalable web applications while producing professional video content for tech companies and startups.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "FFmpeg"],
    achievements: [
      "Built real-time analytics dashboard with 99.9% uptime",
      "Produced promotional videos for 20+ tech startups",
      "Optimized video processing pipeline reducing costs by 40%"
    ],
    link: "#"
  },
  {
    year: "2021",
    title: "Software Engineer & Content Creator",
    company: "Media & Technology Agency",
    description: "Focused on backend development and database optimization while creating engaging video content for social media campaigns.",
    technologies: ["Python", "Django", "Redis", "Elasticsearch", "OpenCV"],
    achievements: [
      "Developed content management system handling 10M+ assets",
      "Created viral video content with 5M+ total views",
      "Implemented machine learning models for content recommendation"
    ],
    link: "#"
  },
  {
    year: "2020",
    title: "Junior Developer & Assistant Videographer",
    company: "Digital Solutions Firm",
    description: "Started my journey in professional development while learning advanced cinematography techniques and video production workflows.",
    technologies: ["JavaScript", "React", "MySQL", "Adobe Premiere", "After Effects"],
    achievements: [
      "Contributed to 5 major web applications",
      "Assisted in producing 30+ commercial videos",
      "Learned advanced gimbal operations and camera techniques"
    ],
    link: "#"
  }
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      item.classList.add('opacity-0');
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-12 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-foreground to-accent bg-clip-text text-transparent mb-6">
            Professional Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-6">
            A timeline of my evolution from passionate learner to creative technologist, 
            blending software development with cinematic storytelling.
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto px-6 pb-20">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent h-full" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`timeline-item relative flex items-center justify-between transition-all duration-700 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.year}
                      </Badge>
                      {item.link && (
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-accent-foreground font-medium mt-1">
                        {item.company}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-background rounded-full animate-pulse" />
                </div>
              </div>

              {/* Empty Space for Opposite Side */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ready for the Next Chapter?</h3>
            <p className="text-muted-foreground">
              Let's collaborate on something extraordinary.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;