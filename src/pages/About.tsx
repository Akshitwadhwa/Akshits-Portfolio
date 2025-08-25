import profileImage from "@/assets/akshit-profile.png";
import { Atom, Brain, SquareFunction } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/constants/portfolio";

const About = () => {
  const { name } = PORTFOLIO_CONFIG;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-start gap-8 mb-12">
          <div className="relative">
            <img 
              src={profileImage}
              alt={`${name} profile`}
              className="w-40 h-40 rounded-full object-cover border-4 border-portfolio-blue/20 shadow-lg aspect-square"
              style={{ objectPosition: 'center center' }}
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-foreground mb-4">{name}</h1>
            <p className="text-muted-foreground text-xl leading-relaxed mb-4">
              Software Developer specializing in React, Machine Learning, and Artificial Intelligence. Passionate
              about creating innovative solutions and exploring new technologies.
            </p>
            <p className="text-muted-foreground text-lg">Based in Gurgaon</p>
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
              <SquareFunction className="h-6 w-6 text-portfolio-green" />
              <span className="text-foreground font-medium">Full Stack Development</span>
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


