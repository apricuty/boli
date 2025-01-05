// 使用 Vite 的 import.meta.glob 获取所有图片
const imageFiles = import.meta.glob('/public/images/*.*', {
  eager: true,
  as: 'url'
});

export const getImageList = () => {
  try {
    const images = Object.entries(imageFiles)
      .filter(([path]) => isImageFile(path))
      .map(([path, url]) => ({
        path,
        url: url as string,
        name: path.split('/').pop() || ''
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    if (images.length === 0) {
      throw new Error('未找到有效的图片文件');
    }

    return images;
  } catch (error) {
    console.error('加载图片列表失败:', error);
    throw error;
  }
};

// 支持的图片类型
export const SUPPORTED_IMAGE_TYPES = [
  'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'
];

// 检查文件是否为图片
export const isImageFile = (filename: string) => {
  const extension = filename.split('.').pop()?.toLowerCase() || '';
  return SUPPORTED_IMAGE_TYPES.includes(extension);
}; 