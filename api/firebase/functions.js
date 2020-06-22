import app from "./firebase";
import { useState, useEffect } from "react";

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

export const loginUser = (email, password) => {
  const isLoading = true;
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      isLoading = false;
      console.log(response);
    })
    .catch(error => {
      isLoading = false;
      console.log(error);
    });

  return { isLoading };
};
