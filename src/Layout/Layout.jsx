import React, { useState } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children, inpvalue, setInpvalue, select, setSelect }) => {

  return (
    <>
      <Header
        inputvalue={inpvalue}
        setInputvalue={setInpvalue}
        select={select}
        setSelect={setSelect}
      />

      <main>{children}</main>
      <Footer />
    </>
  );
};
