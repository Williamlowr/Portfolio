import React from "react";

// Search box component
const SearchBox: React.FC<{ value: string; onChange: (v: string) => void }> = ({
  value,
  onChange,
}) => (
  <input
    type="text"
    placeholder="Search demonstrations... for demonstrating search"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    autoFocus={false}
    className="rounded-xl border border-zinc-700/70 bg-transparent px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-zinc-400/50 w-80"
  />
);

export const EmptyState: React.FC = () => (
  <div className="text-center py-16">
    <div className="text-lg font-medium">No projects match your search.</div>
    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
      Try clearing the search and trying again
    </p>
  </div>
);

export default SearchBox;
