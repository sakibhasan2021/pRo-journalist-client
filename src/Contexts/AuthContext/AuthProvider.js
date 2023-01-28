import React, { createContext, useEffect, useState } from "react";
import app from "./../../Firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
console.log(auth);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Sakib");
  const [loading, setLoading] = useState(true);
  const createUserUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);
  const authValue = { user, loading, createUserUsingGoogle, logOut };
  return (
    <div>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
