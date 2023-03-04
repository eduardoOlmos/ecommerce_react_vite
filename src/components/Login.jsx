import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Error } from "./Error";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { registered, setUserLogin, setIsLogin, setUserName } = useAuth();
  const navigate = useNavigate();

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([email, password].includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (registered.length === 0) {
      setError("No tienes una cuenta registrada");
      setEmail("");
      setPassword("");
      return;
    }

    //se recorre arreglo de registros, para verificar que el correo ingresado coincida con alguno registrado
    const userL = registered.filter((user) => user.email === email);
    const name = userL[0]?.nombre.split(' ')[0];
    if (password === userL[0]?.password) {
      setError(false);
      const objLogin = {
        email,
        password,
      };

      setUserLogin(objLogin);
      setIsLogin(true);
      setUserName(name)
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      setError("La contraseña no coincide");
      return;
    }
  };

  return (
    <div className="flex container justify-center">
      <div className="md:w-screen lg:w-2/5">
        <p className="text-lg mt-5 text-center mb-10">
          Inicia sesión con tu {""}
          <span className="text-indigo-600 font-bold">cuenta</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        >
          {error && (
            <Error>
              <p>{error}</p>
            </Error>
          )}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Correo electronico
            </label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="contraseña"
              className="block text-gray-700 uppercase font-bold"
            >
              Contraseña
            </label>
            <input
              id="contraseña"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer rounded-md"
            value="Iniciar sesión"
          />
        </form>
        <p className="text-lg mt-5 text-center mb-10">
          ¿No tienes una cuenta? {""}
          <Link to="/register">
            <span className="text-indigo-600 font-bold">Registrate</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
