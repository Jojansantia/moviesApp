import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IUser } from "../interfaces"
const mockData = require('../mockData.json');

const useLogin = () => {
  const [userData, setUserData] = useState<IUser>({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { toggleLogged } = useContext( AppContext );

  const onChangeUserData = (name: string, value: string) => {
    setUserData( prevData => ({ ...prevData, [name]: value }) );
  };

  const validateLogin = (userData: any) => {
    const REGEX_EMAIL = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    if (!userData.email.trim() && !userData.password.trim()) return 'El usuario y la contraseña no pueden estar vacíos';
    if (!userData.email.trim()) return 'El usuario no pueden estar vacío';
    if (!userData.password.trim()) return 'La contraseña no pueden estar vacío';
    if (!REGEX_EMAIL.test(userData.email)) return 'Email no válido';
    if (userData.email !== mockData.email && userData.password !== mockData.password) return 'Los campos son incorrectos';
    toggleLogged(userData);
    return ""
  };

  const onSubmitLogin = async (e: any) => {
    e.preventDefault()
    const errorMsg = validateLogin(userData);
    setErrorMessage(errorMsg);
    if (errorMsg) return;
  };

  return {
    userData,
    errorMessage,
    onChangeUserData,
    onSubmitLogin,
    toggleLogged
  };
};

export default useLogin;
