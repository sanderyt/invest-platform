import React, { useReducer, createContext, useEffect } from "react";
import Cookie from "js-cookie";

let user = '';

if (Cookie.get("user")) {
    user = JSON.parse(Cookie.get("user"));
} 

const initialState = {
  auth: user, 
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

  useEffect(() => {
    if (Cookie.get("user")) {
      login(JSON.parse(Cookie.get("user")));
    }
  }, []);

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
      value={{ user: state.auth, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
