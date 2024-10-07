import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
    <div className="relative w-3/4 rounded overflow-hidden my-2 mx-auto -m-1 h-8 mb-4">
      <div
        className="top-0 h-full rounded-lg bg-white w-full"
      ></div>
      <div
        className="absolute top-0 left-0 h-full bg-gray-700"
        style={{ width: `${level}%` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <span className="text-s font-semibold">{skill}</span>
      </div>
    </div>
  );
};

export default SkillBar;
