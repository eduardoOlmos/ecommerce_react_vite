import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Error } from "../components/Error";

export const RegisterPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { registered, setRegistred } = useAuth();
  const navigate = useNavigate();

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, password, confirmPassword].includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if(registered.length > 0){
        const userR = registered.filter((user) => user.email === email);
        userR.length > 0 && setError('Este correo ya esta registrado');
        return;
    }

    if (password !== confirmPassword) {
      setError("Los password no son iguales");
      return;
    }

    if (password.length < 6) {
      setError("El Password es muy corto, agrega minimo 6 caracteres");
      return;
    }

    const objRegistered = {
      id: generarID(),
      nombre,
      email,
      password,
    };

    setRegistred([...registered, objRegistered]);
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  };

  return (
    <div className="flex container justify-center">
      <div className="md:w-screen lg:w-2/5">
        <p className="text-lg mt-5 text-center mb-10">
          Registrate y comienza a {""}
          <span className="text-indigo-600 font-bold">acumular beneficios</span>
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
              htmlFor="nombre"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
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
          <div className="mb-5">
            <label
              htmlFor="confirmContraseña"
              className="block text-gray-700 uppercase font-bold"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirmContraseña"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Contraseña"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer rounded-md"
            value="Registrar"
          />
        </form>
        <p className="text-lg mt-5 text-center mb-10">
          ¿Ya tienes una cuenta? {""}
          <Link to="/login">
            <span className="text-indigo-600 font-bold">Inicia sesión</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
