import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/akhit-profile.jpg";
import { Atom, Brain, SquareFunction } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/constants/portfolio";

const About = () => {
  const { name } = PORTFOLIO_CONFIG;

  return (
    <div className="container py-10">
      <div className="max-w-3xl">
        {/* Header: Avatar, Name, Subtitle */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profileImage} alt={`${name} profile`} />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-3xl font-semibold text-text-primary">{name}</h1>
            <p className="text-base text-text-secondary">
              Software Developer specializing in React, Machine Learning, and Artificial Intelligence. Passionate
              about creating innovative solutions and exploring new technologies.
            </p>
            <p className="text-sm text-text-muted mt-1">Based in San Francisco, CA</p>
          </div>
        </div>

        {/* About Me */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text-primary">About Me</h2>
          <p className="mt-3 text-text-secondary text-base leading-8">
            I am a dedicated software developer with a strong foundation in React, Machine Learning, and Artificial
            Intelligence. My expertise lies in building scalable and efficient applications that solve complex
            problems. I am passionate about staying up-to-date with the latest industry trends and continuously
            improving my skills.
          </p>
        </section>

        {/* Key Technologies */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text-primary">Key Technologies</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-portfolio-gray/20 bg-background px-5 py-4">
              <Atom className="h-6 w-6 text-portfolio-blue" />
              <span className="text-base text-text-primary font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-portfolio-gray/20 bg-background px-5 py-4">
              <SquareFunction className="h-6 w-6 text-portfolio-green" />
              <span className="text-base text-text-primary font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-portfolio-gray/20 bg-background px-5 py-4">
              <Brain className="h-6 w-6 text-portfolio-red" />
              <span className="text-base text-text-primary font-medium">Artificial Intelligence</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


