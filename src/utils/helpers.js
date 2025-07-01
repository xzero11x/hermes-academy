// Utilidades y helpers para el proyecto - Optimizadas

// Cache de formatters para evitar recrear objetos
const currencyFormatter = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
  minimumFractionDigits: 0
});

const dateFormatter = new Intl.DateTimeFormat('es-PE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const timeFormatter = new Intl.DateTimeFormat('es-PE', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
});

export const formatCurrency = (amount) => {
  return currencyFormatter.format(amount);
};

export const formatDate = (dateString) => {
  return dateFormatter.format(new Date(dateString));
};

export const formatTime = (timeString) => {
  return timeFormatter.format(new Date(`2000-01-01T${timeString}:00`));
};

export const getTimeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMinutes = Math.floor((now - past) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Hace un momento';
  if (diffInMinutes < 60) return `Hace ${diffInMinutes} minutos`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `Hace ${diffInHours} horas`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `Hace ${diffInDays} días`;
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};
