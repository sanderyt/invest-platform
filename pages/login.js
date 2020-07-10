import React from "react";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Subheader subtitle="Login" />
      <Box>
        <LoginForm />
      </Box>
    </Layout>
  );
};

export default Login;
