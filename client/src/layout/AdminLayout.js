import React from "react";
import { SideMenu } from "../components/side-menu/SideMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

      <SideMenu />

      {/* Main body */}
      <main className="main container">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
