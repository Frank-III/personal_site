import React, { useState } from 'react';

interface CodePlaygroundProps {
  code: string;
  language?: string;
  editable?: boolean;
}

export function CodePlayground({ code: initialCode, language = 'javascript', editable = true }: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 border border-zinc-300 dark:border-zinc-700 rounded overflow-hidden">
      <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 flex justify-between items-center text-sm">
        <span className="text-zinc-600 dark:text-zinc-400">{language}</span>
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded text-xs transition-colors text-zinc-700 dark:text-zinc-300"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      {editable ? (
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-4 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-sm resize-y min-h-[120px] focus:outline-none border-t border-zinc-200 dark:border-zinc-700"
          spellCheck={false}
        />
      ) : (
        <pre className="p-4 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 overflow-x-auto border-t border-zinc-200 dark:border-zinc-700">
          <code className="font-mono text-sm">{code}</code>
        </pre>
      )}
    </div>
  );
}
