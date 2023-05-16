import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [token, setToken] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem(key, token);
    } else {
      localStorage.removeItem(key);
    }
  }, [key, token]);

  const setTokenValue = (newToken) => {
    setToken(newToken);
  };

  const removeToken = () => {
    setToken(null);
  };

  const getToken = () => {
    return token;
  };

  const getDecodedToken = () => {
    if (getToken()) {
      try {
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
          console.error('Invalid token format');
          return null;
        }

        const decodedValue = atob(tokenParts[1]);
        const parsedValue = JSON.parse(decodedValue);
        return parsedValue;
      } catch (error) {
        console.error('Failed to decode token', error);
        return null;
      }
    } else {
      return 'failed to find token'
    }
    
  };

  return [token, setTokenValue, removeToken, getToken, getDecodedToken];
};

export default useLocalStorage;