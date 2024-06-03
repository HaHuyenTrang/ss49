import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bai6() {
  return (
    <div>
      <nav>
        <NavLink style={{ margin: "20px" }} to={"/home"}>
          Home
        </NavLink>
        <NavLink style={{ margin: "20px" }} to={"/contact"}>
          Conatact
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
