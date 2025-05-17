import { useState, useEffect } from 'react';

export function useUserRole() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserRole(payload.role);
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
      }
    }
  }, []);

  return userRole;
}