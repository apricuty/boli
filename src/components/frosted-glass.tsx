import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import { getImageList } from '../utils/imageUtils';
import 'react-resizable/css/styles.css';

export default function FrostedGlass() {
  const [images, setImages] = useState<Array<{ path: string; url: string; name: string }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
  
  // 文字编辑状态
  const [text, setText] = useState('点击这里编辑文字');
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    const imageList = getImageList();
    setImages(imageList);
  }, []);

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleResize = (event: any, { size }: { size: { width: number; height: number } }) => {
    setDimensions(size);
  };

  // 处理文字编辑
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // 处理编辑完成
  const handleEditComplete = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      <div className="w-4/5 relative rounded-xl overflow-hidden">
        {images.length > 0 && (
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].name}
            className="w-full h-auto object-cover transition-all duration-500"
          />
        )}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ResizableBox
            width={dimensions.width}
            height={dimensions.height}
            minConstraints={[300, 200]}
            maxConstraints={[800, 600]}
            onResize={handleResize}
            resizeHandles={['se', 'sw', 'ne', 'nw', 'e', 'w', 'n', 's']}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl">
                <div className="absolute inset-0 backdrop-blur-md bg-white/10" />
                
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {isEditing ? (
                    <textarea
                      value={text}
                      onChange={handleTextChange}
                      onBlur={handleEditComplete}
                      className="w-full h-full bg-transparent text-white text-center resize-none border-none focus:outline-none focus:ring-0 text-2xl"
                      autoFocus
                      placeholder="输入你想要的文字..."
                      style={{ 
                        background: 'transparent',
                        caretColor: 'white'
                      }}
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center cursor-text"
                      onClick={() => setIsEditing(true)}
                    >
                      <p className="text-white text-2xl whitespace-pre-wrap break-words">
                        {text}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 编辑提示 */}
            <div className="absolute bottom-2 right-2 text-white/50 text-xs">
              点击文字编辑 | 拖拽边角调整大小
            </div>
          </ResizableBox>
        </div>
      </div>

      {/* 导航按钮 */}
      <div className="mt-8 flex gap-4">
        <button 
          className={`px-6 py-2 rounded-lg text-white transition-colors ${
            currentIndex === 0 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
          onClick={handlePrevImage}
          disabled={currentIndex === 0}
        >
          上一张
        </button>
        <button 
          className={`px-6 py-2 rounded-lg text-white transition-colors ${
            currentIndex === images.length - 1 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
          onClick={handleNextImage}
          disabled={currentIndex === images.length - 1}
        >
          下一张
        </button>
      </div>
    </div>
  );
} 