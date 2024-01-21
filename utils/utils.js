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

export const returnDateDayString = (eventDate) => {
  const date = new Date(eventDate);
  const day = date.toLocaleString('default', { weekday: 'long' });
  return `${day}`
}

export const returnDateTime = (eventDate) => {
  const date = new Date(eventDate);
  const time = date.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true });
  return `${time}`;
}

export const shortenEventName = (eventName) => {
  if (!eventName) return null
  const shortenedName = eventName.substring(0, 19);
  return shortenedName;
}

export const maskEmail = (email) => {
  const atIndex = email.indexOf('@');
  const username = email.slice(0, atIndex);
  const maskedUsername = username.replace(/.(?=.)/g, '*');
  const domain = email.slice(atIndex);
  return maskedUsername + domain;
};

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const usernameRegex = /^\w+$/;

export const moneyFormat = (currency, price) => {
  if (price === 0) {
    return "Free";
  } else {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
  }
};

