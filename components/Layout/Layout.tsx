import React, { ReactPropTypes } from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
