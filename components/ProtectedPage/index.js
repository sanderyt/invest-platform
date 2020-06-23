import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import Router from "next/router";

const ProtectedPage = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) return children;
  if (!user) Router.push("/login");
};

export default ProtectedPage;
