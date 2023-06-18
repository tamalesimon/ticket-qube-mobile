export const checkImageURL = (url) => {
    if (!url) return false;
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp', '.gif', '.webp'];
    return allowedExtensions.some(ext => url.toLowerCase().endsWith(ext));
  }

  export const returnDateMonth = (eventDate) => {
    const date = new Date(eventDate);
    const month = date.toLocaleString('default', { month: 'short' });
    return `${month}`;
  }

  export const returnDateDay = (eventDate) => {
    const date = new Date(eventDate);
    const day = date.toLocaleString('default', { day: 'numeric' });
    return `${day}`;
  }

  export const shortenEventName = (eventName) => {
    if(!eventName) return null
    const shortenedName = eventName.substring(0, 17)+"...";
    return shortenedName;
  }
