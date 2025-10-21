import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, defaultOpen = false, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-zinc-300 dark:border-zinc-700 rounded overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-black/3 dark:bg-white/5 text-left font-medium flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-800 dark:text-zinc-200"
      >
        <span>{title}</span>
        <span className="text-sm transform transition-transform" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-zinc-600 dark:text-zinc-400 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}
