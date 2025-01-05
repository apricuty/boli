import React from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  fontSize: number;
}

export default function CodeEditor({ value, onChange, onBlur, fontSize }: CodeEditorProps) {
  const lines = value.split('\n');
  
  return (
    <div className="code-editor-container w-full h-full flex">
      {/* 行号 */}
      <div className="line-numbers px-2 py-2 text-gray-500 select-none bg-[#1B1F27]/80 border-r border-gray-700/50">
        {lines.map((_, index) => (
          <div 
            key={index} 
            className="text-right pr-2"
            style={{ fontSize: `${fontSize}px`, lineHeight: '1.5' }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      
      {/* 代码编辑区 */}
      <div className="flex-1 relative">
        {/* 装饰元素：模拟文件标签 */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#1B1F27]/90 border-b border-gray-700/50 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="ml-4 text-gray-400 text-sm">untitled.txt</span>
        </div>
        
        <textarea
          value={value}
          onChange={(e) => {
            console.log('Text changed:', e.target.value);
            onChange(e.target.value);
          }}
          onBlur={() => {
            console.log('Editor lost focus');
            onBlur();
          }}
          className="w-full h-full bg-[#1B1F27] text-[#ABB2BF] p-2 pt-10 resize-none focus:outline-none font-mono"
          style={{ 
            fontSize: `${fontSize}px`,
            lineHeight: '1.5',
            caretColor: '#528BFF',
            tabSize: 2
          }}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>
    </div>
  );
} 