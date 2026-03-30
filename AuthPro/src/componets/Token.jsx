import react, { createContext, useContext } from "react";

// step :1 create context
export const AuthContext = createContext();

// step :2 create provider
export const AuthProvider = ({ children }) => {
  let [token, settoken] = react.useState("");

  if (token) {
    localStorage.setItem("token", token);
  }
  let Islogout = () => {
    settoken("");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ token, settoken ,Islogout}}>
      {children}
    </AuthContext.Provider>
  );
};
