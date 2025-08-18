import profileImage from "@/assets/akhit-profile.jpg";
import { Atom, Brain, SquareFunction } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/constants/portfolio";

const About = () => {
  const { name } = PORTFOLIO_CONFIG;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-12">
          <div className="relative">
            <img 
              src={profileImage}
              alt={`${name} profile`}
              className="w-24 h-24 rounded-full object-cover border-2 border-portfolio-gray/30"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">{name}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-2">
              Software Developer specializing in React, Machine Learning, and Artificial Intelligence. Passionate
              about creating innovative solutions and exploring new technologies.
            </p>
            <p className="text-muted-foreground">Based in Gurgaon</p>
          </div>
        </div>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I am a dedicated software developer with a strong foundation in React, Machine Learning, and Artificial
            Intelligence. My expertise lies in building scalable and efficient applications that solve complex
            problems. I am passionate about staying up-to-date with the latest industry trends and continuously
            improving my skills.
          </p>
        </section>

        {/* Key Technologies Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
              <Atom className="h-6 w-6 text-portfolio-blue" />
              <span className="text-foreground font-medium">React</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
              <SquareFunction className="h-6 w-6 text-portfolio-green" />
              <span className="text-foreground font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
              <Brain className="h-6 w-6 text-portfolio-red" />
              <span className="text-foreground font-medium">Artificial Intelligence</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


