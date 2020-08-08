import React, { useReducer, createContext, useEffect } from "react";
import Cookie from "js-cookie";

const initialState = {
  user: {
    user: {
      id: "5f297eaba80b8800175e02aa"
    }
  }
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

  const login = userData => {
    Cookie.set("user", JSON.stringify(userData));
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  };

  const logout = () => {
    Cookie.remove("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
