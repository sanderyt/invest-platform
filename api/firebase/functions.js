import app from "./firebase";

export const registerUser = (email, password) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export const loginUser = (email, password) => {
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

return {
  registerUser,
  loginUser
};
