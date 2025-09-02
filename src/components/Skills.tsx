import React from 'react';
import Marquee from 'react-fast-marquee';
import { FRONTEND_STACKS, BACKEND_STACKS, StacksProps } from '@/constants/stacks';

interface SkillsListProps {
  stacks: StacksProps;
}

const SkillsList = ({ stacks }: SkillsListProps) => {
  return (
    <ul className="flex items-center" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon;
        const className = stacks[stack].className;
        return (
          <li
            role="listitem"
            key={index}
            className="mr-3 flex w-max items-center gap-2 rounded-full border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm px-3 py-2 text-sm text-white shadow-lg hover:border-blue-400/40 hover:bg-slate-700/60 transition-all duration-300"
          >
            <Icon className={`${className} text-base`} aria-label={stack} />
            <span className="whitespace-nowrap font-medium">{stack}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="flex items-center justify-center px-4 py-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full space-y-4">
          <div className="space-y-6">
            <Marquee autoFill pauseOnHover speed={20}>
              <SkillsList stacks={FRONTEND_STACKS} />
            </Marquee>

            <Marquee autoFill pauseOnHover direction="right" speed={20}>
              <SkillsList stacks={BACKEND_STACKS} />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
