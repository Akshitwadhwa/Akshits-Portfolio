import { SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiVite } from 'react-icons/si';
import { FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { BiLogoSpringBoot, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';

export interface StackProps {
  Icon: React.ElementType;
  className: string;
}

export interface StacksProps {
  [key: string]: StackProps;
}

export const FRONTEND_STACKS: StacksProps = {
  React: {
    Icon: SiReact,
    className: "text-cyan-400",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    className: "text-white",
  },
  Vite: {
    Icon: SiVite,
    className: "text-purple-500",
  },
  TypeScript: {
    Icon: SiTypescript,
    className: "text-blue-400",
  },
  JavaScript: {
    Icon: SiJavascript,
    className: "text-yellow-400",
  },
  TailwindCSS: {
    Icon: SiTailwindcss,
    className: "text-cyan-300",
  },
  HTML5: {
    Icon: SiHtml5,
    className: "text-orange-500",
  },
  CSS3: {
    Icon: SiCss3,
    className: "text-blue-500",
  },
};

export const BACKEND_STACKS: StacksProps = {
  Node: {
    Icon: FaNodeJs,
    className: "text-green-500",
  },
  Java: {
    Icon: FaJava,
    className: "text-red-500",
  },
  Python: {
    Icon: FaPython,
    className: "text-yellow-300",
  },
  SpringBoot: {
    Icon: BiLogoSpringBoot,
    className: "text-green-600",
  },
  PostgreSQL: {
    Icon: BiLogoPostgresql,
    className: "text-blue-400",
  },
  MongoDB: {
    Icon: BiLogoMongodb,
    className: "text-green-500",
  },
};
