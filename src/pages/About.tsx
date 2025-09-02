import profileImage from "@/assets/akshit-profile.png";
import { Atom, Brain, SquareFunction } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/constants/portfolio";
import Skills from "@/components/Skills";

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
              Software and AI developer specializing in Machine Learning, and Artificial Intelligence and Mern stack development through rect. Passionate
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

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Skills & Technologies</h2>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default About;


