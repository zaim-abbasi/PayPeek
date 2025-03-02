import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define the shape of the context
interface AuthContextType {
  currentUser: any | null;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Mock user state for UI development
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  // Mock auth functions
  const signInWithEmail = async (email: string, password: string) => {
    console.log('Sign in with email:', email, password);
    // This would be implemented with actual authentication later
    return Promise.resolve();
  };

  const signUpWithEmail = async (email: string, password: string, displayName: string) => {
    console.log('Sign up with email:', email, password, displayName);
    // This would be implemented with actual authentication later
    return Promise.resolve();
  };

  const signInWithGoogle = async () => {
    console.log('Sign in with Google');
    // This would be implemented with actual authentication later
    return Promise.resolve();
  };

  const signOut = async () => {
    console.log('Sign out');
    // This would be implemented with actual authentication later
    return Promise.resolve();
  };

  const value = {
    currentUser,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};