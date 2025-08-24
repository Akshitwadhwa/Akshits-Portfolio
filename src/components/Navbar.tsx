import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "About", url: "/about" },
  { title: "Skills", url: "/skills" },
  { title: "Experience", url: "/experience" },
  { title: "Projects", url: "/work" },
  { title: "Ask Me", url: "/ask" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className={`container mx-auto px-6 transition-all duration-500 ease-in-out ${
        isScrolled ? "py-2" : "py-6"
      }`}>
        {/* Main Navigation */}
        <div className={`flex items-center transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "justify-between" 
            : "justify-between"
        }`}>
          {/* Logo/Name */}
          <div className={`transition-all duration-500 ease-in-out ${
            isScrolled ? "text-xl" : "text-2xl"
          }`}>
            <NavLink 
              to="/" 
              className="font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Akhit Wadhwa
            </NavLink>
          </div>

          {/* Navigation Links - Hidden on scroll */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-500 ease-in-out ${
            isScrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
          }`}>
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Contact Button */}
          <div className={`transition-all duration-500 ease-in-out ${
            isScrolled ? "scale-90" : "scale-100"
          }`}>
            <Button 
              variant="outline" 
              size={isScrolled ? "sm" : "default"}
              className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              Contact Me
            </Button>
          </div>
        </div>

      </div>

      {/* Mobile Menu - Simple version */}
      <div className={`md:hidden px-6 pb-4 transition-all duration-300 ${
        isScrolled ? "hidden" : "block"
      }`}>
        <div className="flex flex-wrap justify-center gap-4">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}