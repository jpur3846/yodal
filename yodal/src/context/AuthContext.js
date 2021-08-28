import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

// TODO: change defaults later!
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    user: { name: "Wilson" },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
