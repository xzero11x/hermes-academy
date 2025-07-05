// Función de depuración para verificar el estado de autenticación
function debugAuth() {
  console.log('=== DEBUG AUTH ===');

  // Verificar sessionStorage
  console.log('hermesSession:', localStorage.getItem('hermesSession'));

  // Verificar usuarios
  console.log('hermesUsers:', localStorage.getItem('hermesUsers'));

  // Verificar si window.auth existe
  console.log('window.auth existe:', !!window.auth);

  if (window.auth) {
    try {
      const currentUser = window.auth.getCurrentUser();
      console.log('Usuario actual:', currentUser);
      console.log('Está logueado:', window.auth.isLoggedIn());
    } catch (error) {
      console.error('Error obteniendo usuario:', error);
    }
  }

  console.log('===================');
}

// Hacer disponible globalmente
window.debugAuth = debugAuth;

console.log('Debug auth cargado. Ejecuta debugAuth() en la consola para ver el estado.');
