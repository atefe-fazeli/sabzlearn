import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../shared/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../shared/AdminPanel/Topbar/Topbar";

import "./index.css";

export default function index() {
  return (
    <>
      <div id="content">
        <Sidebar />

        <div id="home" class="col-10">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
