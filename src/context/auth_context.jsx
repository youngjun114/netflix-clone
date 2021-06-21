import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../service/firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  /*by default, it is loading, and as soon as it gets first useEffect runs,  it means it did the verification to see if there is user*/
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const user = {
    currentUser,
    signup,
    login,
    logout,
  };
  /* Checking to see if loading because otherwise we don't want to run. If
      it is not loading, then we render out the children otherwise we don't want
      to render children*/
  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// custom hook to return auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
