import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      {
        <Suspense fallback={<h1>loading...</h1>}>
          <Outlet />
        </Suspense>
      }
    </>
  );
};

export default Layout;
