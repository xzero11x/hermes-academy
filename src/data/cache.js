// Sistema de cache para optimizar funciones auxiliares
class DataCache {
  constructor() {
    this.cache = new Map();
    this.expirationTime = 5 * 60 * 1000; // 5 minutos
  }

  get(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.expirationTime) {
      return cached.data;
    }
    return null;
  }

  set(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  clear() {
    this.cache.clear();
  }
}

// Instancia global del cache
const dataCache = new DataCache();

export { dataCache };
