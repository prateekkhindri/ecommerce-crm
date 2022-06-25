import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main body */}
      <main className="main container">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
