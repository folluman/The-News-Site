import { useState, useEffect } from "react";
import axios from "axios";

export function useUserRole() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });

        if (response.data.role) {
          return setUserRole(response.data.role);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setUserRole(null);
          return;
        }
        setUserRole(null);
      }
    };
    fetchUserRole();
  }, []);

  return userRole;
}

export function useUsername() {
  const [userName, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });

        if (response.data.username) {
          return setUsername(response.data.username);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setUsername(null);
          return;
        }
        setUsername(null);
      }
    };
    fetchUsername();
  }, []);
  return userName;
}

export function useUserId() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });

        if (response.data.username) {
          return setUserId(response.data.id);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setUserId(null);
          return;
        }
        setUserId(null);
      }
    };
    fetchUserId();
  }, []);
  return userId;
}
