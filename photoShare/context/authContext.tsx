import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebase_auth } from '../firebase.config';
import { onAuthStateChanged, User } from 'firebase/auth';


type AuthContextType = {
  user: User | null;
};


const AuthContext = createContext<AuthContextType>({ user: null });


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(firebase_auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};