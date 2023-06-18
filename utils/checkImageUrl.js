export const checkImageURL = (url) => {
    if (!url) return false;
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp', '.gif', '.webp'];
    return allowedExtensions.some(ext => url.toLowerCase().endsWith(ext));
  }
