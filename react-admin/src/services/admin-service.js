import axios from 'axios';

class AdminService {
  async loginAdmin(email, password) {
    try {
      const response = await axios.post('http://localhost:3300/api/login_admin', {
        email,
        password,
      });

      // Verificar si el inicio de sesión fue exitoso
      if (response.data.admin && response.data.token) {
        // Almacenar el token en localStorage o en una cookie si es necesario
        localStorage.setItem('token', response.data.token);
        return { success: true, admin: response.data.admin };
      } else {
        return { success: false, message: 'Inicio de sesión fallido' };
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return { success: false, message: 'Error al iniciar sesión' };
    }
  }
}

export default new AdminService();
