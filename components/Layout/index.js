import React from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content d-flex justify-content-center flex-column align-items-center">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
