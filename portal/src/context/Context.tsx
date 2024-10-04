'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserContextProps {
  user: any;
  setUser: (user: any) => void;
  isLoggedIn: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // Debugging: Check state changes
  useEffect(() => {
    console.log('User state:', user);
    setIsLoggedIn(!!user);
    console.log('isLoggedIn state:', isLoggedIn);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
