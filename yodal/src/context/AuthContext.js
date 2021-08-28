import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({
  currentUser: null,
  signup: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

// TODO: change defaults later!
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
