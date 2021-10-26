import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <div className={styles["page-container"]}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
