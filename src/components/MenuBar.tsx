import React from 'react';

interface MenuBarProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  textAlign: 'left' | 'center' | 'right';
  onAlignChange: (align: 'left' | 'center' | 'right') => void;
}

export default function MenuBar({ 
  fontSize, 
  onFontSizeChange, 
  textAlign, 
  onAlignChange 
}: MenuBarProps) {
  return (
    <div className="frosted-glass px-4 py-2 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-white text-sm">字体大小:</span>
        <button
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          onClick={() => fontSize > 12 && onFontSizeChange(fontSize - 2)}
        >
          -
        </button>
        <span className="text-white min-w-[2.5rem] text-center">{fontSize}px</span>
        <button
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          onClick={() => fontSize < 48 && onFontSizeChange(fontSize + 2)}
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-white text-sm">对齐:</span>
        <button
          className={`w-8 h-8 rounded-full ${textAlign === 'left' ? 'bg-white/30' : 'bg-white/10'} hover:bg-white/20 text-white flex items-center justify-center`}
          onClick={() => onAlignChange('left')}
        >
          左
        </button>
        <button
          className={`w-8 h-8 rounded-full ${textAlign === 'center' ? 'bg-white/30' : 'bg-white/10'} hover:bg-white/20 text-white flex items-center justify-center`}
          onClick={() => onAlignChange('center')}
        >
          中
        </button>
        <button
          className={`w-8 h-8 rounded-full ${textAlign === 'right' ? 'bg-white/30' : 'bg-white/10'} hover:bg-white/20 text-white flex items-center justify-center`}
          onClick={() => onAlignChange('right')}
        >
          右
        </button>
      </div>
    </div>
  );
} 