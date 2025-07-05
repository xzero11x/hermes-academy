// Sistema de Autenticación Global para Hermes Academy
// Este archivo maneja la autenticación de forma consistente en todas las páginas

class GlobalAuthManager {
  constructor() {
    this.usersKey = 'hermesUsers';
    this.sessionKey = 'hermesSession';
    this.initialized = false;

    // Inicializar usuarios demo si no existen
    this.initializeDemoUsers();
  }

  // Obtener usuarios
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

  // Login
  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return {
        success: false,
        error: 'Email o contraseña incorrectos',
      };
    }

    const session = {
      userId: user.id,
      email: user.email,
      isLoggedIn: true,
      loginAt: new Date().toISOString(),
    };
    this.saveSession(session);

    return {
      success: true,
      user: user,
      session: session,
    };
  }

  // Registro
  register(email, password) {
    const users = this.getUsers();

    if (users.find(user => user.email === email)) {
      return {
        success: false,
        error: 'Este email ya está registrado',
      };
    }

    const newUser = {
      id: Date.now(),
      email: email,
      password: password,
      isProfileComplete: false,
      createdAt: new Date().toISOString(),
      roles: {
        isStudent: true,
        isTutor: false,
        tutorStatus: null,
      },
      tutorProfile: null,
    };

    users.push(newUser);
    this.saveUsers(users);

    const session = {
      userId: newUser.id,
      email: newUser.email,
      isLoggedIn: true,
      loginAt: new Date().toISOString(),
    };
    this.saveSession(session);

    return {
      success: true,
      user: newUser,
      session: session,
    };
  }

  // Logout
  logout() {
    localStorage.removeItem(this.sessionKey);
    return { success: true };
  }

  // Inicializar usuarios demo
  initializeDemoUsers() {
    if (this.initialized) return;

    const users = this.getUsers();
    console.log('Inicializando usuarios demo. Usuarios existentes:', users.length);

    // Verificar si ya existen los usuarios demo específicos
    const studentExists = users.find(u => u.email === 'juanc4@utec.edu.pe');
    const tutorExists = users.find(u => u.email === 'jorge.ramirez@utec.edu.pe');

    if (!studentExists || !tutorExists) {
      console.log('Creando usuarios demo...');

      const existingUsers = this.getUsers();
      const allUsers = [...existingUsers];

      // Agregar tutor si no existe
      if (!tutorExists) {
        allUsers.push({
          id: 2,
          email: 'jorge.ramirez@utec.edu.pe',
          password: 'tutor123',
          isProfileComplete: true,
          createdAt: '2024-01-15T10:00:00.000Z',
          profile: {
            fullName: 'Jorge Ramírez Silva',
            university: 'Universidad de Ingeniería y Tecnología',
            universityId: 1,
            career: 'Ingeniería de Sistemas',
            semester: 8,
            phone: '+51 987654321',
            studentId: '201901234',
            completedAt: '2024-01-15T10:30:00.000Z',
          },
          roles: {
            isStudent: true,
            isTutor: true,
            tutorStatus: 'approved',
          },
          tutorProfile: {
            courses: [
              {
                courseId: 3,
                university: 'Universidad de Ingeniería y Tecnología',
                courseName: 'Estructuras de Datos',
                courseCode: 'CS2001',
                grade: 18,
                semester: '2023-2',
                isApproved: true,
                hourlyRate: 32,
                description: 'Algoritmos y estructuras de datos fundamentales. Implementación práctica en Python.',
              },
            ],
            totalSessions: 45,
            rating: 4.8,
            description: 'Tutor especializado en Estructuras de Datos con 2 años de experiencia enseñando.',
            verificationStatus: 'verified',
            verifiedAt: '2024-01-15T10:30:00.000Z',
            availability: {
              monday: ['14:00-16:00', '18:00-20:00'],
              tuesday: ['16:00-18:00'],
              wednesday: ['14:00-16:00', '18:00-20:00'],
              thursday: ['16:00-18:00'],
              friday: ['14:00-17:00'],
              saturday: ['09:00-12:00'],
              sunday: [],
            },
          },
        });
      }

      // Agregar estudiante si no existe
      if (!studentExists) {
        allUsers.push({
          id: 1000,
          email: 'juanc4@utec.edu.pe',
          password: 'juanca123',
          isProfileComplete: true,
          createdAt: '2024-02-01T09:00:00.000Z',
          profile: {
            fullName: 'Juan Carlos Mendoza Rivera',
            university: 'Universidad de Ingeniería y Tecnología',
            universityId: 1,
            career: 'Ingeniería de Sistemas',
            semester: 4,
            phone: '+51 912345678',
            studentId: '202011567',
            learningGoals: 'Matemáticas, Programación, Estructuras de Datos',
            completedAt: '2024-02-01T09:30:00.000Z',
          },
          roles: {
            isStudent: true,
            isTutor: false,
            tutorStatus: null,
          },
          tutorProfile: null,
          scheduledTutorings: [
            {
              id: 'TUT001',
              tutorId: 2,
              tutorName: 'Jorge Ramírez Silva',
              courseId: 3,
              courseName: 'Estructuras de Datos',
              courseCode: 'CS2001',
              date: '2025-07-08',
              time: '14:00',
              duration: 60,
              price: 32,
              status: 'confirmed',
              sessionType: 'online',
              meetingLink: 'https://hermes-academy.com/room/TUT001',
              confirmedAt: '2025-07-02T10:00:00.000Z',
            },
            {
              id: 'TUT002',
              tutorId: 2,
              tutorName: 'Jorge Ramírez Silva',
              courseId: 3,
              courseName: 'Estructuras de Datos',
              courseCode: 'CS2001',
              date: '2025-07-10',
              time: '16:00',
              duration: 60,
              price: 32,
              status: 'confirmed',
              sessionType: 'online',
              meetingLink: 'https://hermes-academy.com/room/TUT002',
              confirmedAt: '2025-07-03T14:00:00.000Z',
            },
          ],
        });
      }

      this.saveUsers(allUsers);
      console.log('Usuarios demo creados exitosamente');
    }

    this.initialized = true;
  }

  // Función de depuración
  debug() {
    console.log('=== DEBUG AUTH GLOBAL ===');
    console.log('hermesSession:', localStorage.getItem('hermesSession'));
    console.log('hermesUsers:', localStorage.getItem('hermesUsers'));
    console.log('Usuario actual:', this.getCurrentUser());
    console.log('Está logueado:', this.isLoggedIn());
    console.log('========================');
  }
}

// Crear instancia global única
if (!window.hermesAuth) {
  window.hermesAuth = new GlobalAuthManager();
}

// Mantener compatibilidad con window.auth
window.auth = window.hermesAuth;

// Función global de depuración
window.debugAuth = function () {
  window.hermesAuth.debug();
};

console.log('Sistema de autenticación global cargado');
