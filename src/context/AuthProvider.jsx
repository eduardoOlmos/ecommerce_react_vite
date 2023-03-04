import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [registered, setRegistred] = useState([]);
  const [userLogin, setUserLogin] = useState({});
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const obtenerLS = () => {
      const users = JSON.parse(localStorage.getItem("users")) ?? [];
      setRegistred(users);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    const obtenerLS = () => {
      const user = JSON.parse(localStorage.getItem("users")) ?? {};
      setRegistred(user);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(registered));
  }, [registered]);

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
  }, [userLogin]);

  return (
    <AuthContext.Provider
      value={{
        registered,
        setRegistred,
        userLogin,
        setUserLogin,
        userName,
        setUserName,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
