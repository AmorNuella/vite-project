import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/*navbar and the main page*/}

      <Outlet />
    </div>
  );
};

export default Layout;
