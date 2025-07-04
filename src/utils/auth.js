/**
 * SISTEMA DE AUTENTICACIÓN SIMPLE
 * Maneja login/registro de estudiantes con localStorage
 */

class AuthManager {
  constructor() {
    this.usersKey = 'hermesUsers';
    this.sessionKey = 'hermesSession';
  }

  // Obtener todos los usuarios
  getUsers() {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }

  // Guardar usuarios
  saveUsers(users) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  // Obtener sesión actual
  getCurrentSession() {
    const session = localStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  // Guardar sesión
  saveSession(session) {
    localStorage.setItem(this.sessionKey, JSON.stringify(session));
  }

  // Registrar nuevo usuario
  register(email, password) {
    const users = this.getUsers();

    // Verificar si el email ya existe
    if (users.find(user => user.email === email)) {
      return {
        success: false,
        error: 'Este email ya está registrado'
      };
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now(), // ID único basado en timestamp
      email: email,
      password: password, // En producción esto estaría hasheado
      isProfileComplete: false,
      createdAt: new Date().toISOString()
    };

    // Agregar a la lista de usuarios
    users.push(newUser);
    this.saveUsers(users);

    // Crear sesión automáticamente
    const session = {
      userId: newUser.id,
      email: newUser.email,
      isLoggedIn: true,
      loginAt: new Date().toISOString()
    };
    this.saveSession(session);

    return {
      success: true,
      user: newUser,
      session: session
    };
  }

  // Iniciar sesión
  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return {
        success: false,
        error: 'Email o contraseña incorrectos'
      };
    }

    // Crear sesión
    const session = {
      userId: user.id,
      email: user.email,
      isLoggedIn: true,
      loginAt: new Date().toISOString()
    };
    this.saveSession(session);

    return {
      success: true,
      user: user,
      session: session
    };
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem(this.sessionKey);
    return { success: true };
  }

  // Verificar si está logueado
  isLoggedIn() {
    const session = this.getCurrentSession();
    return session && session.isLoggedIn;
  }

  // Obtener usuario actual
  getCurrentUser() {
    const session = this.getCurrentSession();
    if (!session) return null;

    const users = this.getUsers();
    return users.find(user => user.id === session.userId) || null;
  }

  // Limpiar todos los datos (para testing)
  clearAllData() {
    localStorage.removeItem(this.usersKey);
    localStorage.removeItem(this.sessionKey);
  }
}

// Crear instancia global
const auth = new AuthManager();

// Hacer disponible globalmente
if (typeof window !== 'undefined') {
  window.auth = auth;
}

export default auth;
