import React from "react";

// Tag pill bar component
const TagPill: React.FC<{
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={[
      "px-3 py-1 rounded-full text-xs border-2  transition",
      active
        ? "border-zinc-900 bg-zinc-100 text-zinc-900"
        : "border-zinc-900 bg-slate-700/70 hover:bg-zinc-900/50 hover:border-zinc-300 text-zinc-200",
    ].join(" ")}
  >
    {label}
  </button>
);

export default TagPill;