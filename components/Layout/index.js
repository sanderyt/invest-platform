import React from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
