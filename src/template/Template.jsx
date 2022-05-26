import React, { Fragment } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Template = (props) => {
  return (
    <>
      <Header />
      <main>
        <Fragment>{props.children}</Fragment>
      </main>
      <Footer />
    </>
  );
};

export default Template;
