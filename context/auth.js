import React, { useReducer, createContext, useEffect } from "react";

const initialState = {
  user: null
};

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {}
});

//Reducers
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // useEffect(() => {
  //   if (localStorage.getItem("authUser")) {
  //     const user = JSON.parse(localStorage.getItem("authUser"));
  //     login(user);
  //   } else {
  //     app.auth().onAuthStateChanged(authUser => {
  //       if (authUser) {
  //         localStorage.setItem("authUser", JSON.stringify(authUser));
  //       } else {
  //         localStorage.removeItem("authUser");
  //       }
  //     });
  //   }
  // }, []);

  const login = userData => {
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
