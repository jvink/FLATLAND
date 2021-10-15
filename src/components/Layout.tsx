import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
