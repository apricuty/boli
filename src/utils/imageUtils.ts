// 使用 Vite 的 import.meta.glob 获取所有图片
const imageFiles = import.meta.glob('/public/images/*.*', {
  eager: true,
  as: 'url'
});

export const getImageList = () => {
  // 将对象转换为数组并排序
  const images = Object.entries(imageFiles)
    .map(([path, url]) => ({
      path,
      url: url as string,
      // 从路径中提取文件名
      name: path.split('/').pop() || ''
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return images;
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