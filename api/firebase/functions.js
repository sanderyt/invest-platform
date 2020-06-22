import app from "./firebase";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const useRegister = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (email, password) => {
    setIsLoading(true);
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response, "succes");
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error, "error");
        setError(error.message);
        setIsLoading(false);
      });
  };

  return { registerUser, user, error, isLoading };
};

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AuthContext);

  const loginUser = (email, password) => {
    setIsLoading(true);
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        context.login(response.user);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return { loginUser, user, error, isLoading };
};
