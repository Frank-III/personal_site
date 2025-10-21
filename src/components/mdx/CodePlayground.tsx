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
    <div className="my-4 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span className="text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      {editable ? (
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-y min-h-[120px] focus:outline-none"
          spellCheck={false}
        />
      ) : (
        <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto">
          <code className="font-mono text-sm">{code}</code>
        </pre>
      )}
    </div>
  );
}
