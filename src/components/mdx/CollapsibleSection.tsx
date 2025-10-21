import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, defaultOpen = false, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left font-semibold flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <span>{title}</span>
        <span className="text-xl transform transition-transform" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}
