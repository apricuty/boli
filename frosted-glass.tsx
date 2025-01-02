import React, { useState } from 'react';

export default function FrostedGlass() {
  // 支持切换多张背景图片
  const [currentImage, setCurrentImage] = useState([
    "https://images2.alphacoders.com/138/thumbbig-1383339.webp",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg"
  ][0]);

  // 添加图片切换功能
  const handleImageChange = (index: number) => {
    setCurrentImage(images[index]);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      {/* 主图片容器 */}
      <div className="w-4/5 relative rounded-xl overflow-hidden">
        {/* 背景图片 */}
        <img 
          src={currentImage} 
          alt="Background Image"
          className="w-full h-auto object-cover transition-all duration-500"
        />
        
        {/* 毛玻璃效果区域 */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 overflow-hidden rounded-2xl">
          {/* 渐变边框 */}
          <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent">
            {/* 毛玻璃效果 */}
            <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
            
            {/* 内容区域 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">毛玻璃效果 (Boli)</h2>
                <p className="text-lg opacity-80">优雅的视觉体验</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="mt-8 flex gap-4">
        <button 
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          onClick={() => handleImageChange(0)}
        >
          图片 1
        </button>
        <button 
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          onClick={() => handleImageChange(1)}
        >
          图片 2
        </button>
      </div>
    </div>
  );
} 