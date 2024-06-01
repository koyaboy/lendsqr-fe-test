import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
