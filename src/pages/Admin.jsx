import React from "react";
import AdminSidebar from "../Components/admin/AdminSidebar";
import AdminHeader from "../Components/admin/AdminHeader";
import AdminDashboard from "../Components/admin/AdminDashboard";
import "../Styles/Components/admin.scss";

export default function DashboardAdmin() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div style={{flex:1, display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <AdminHeader />
        <AdminDashboard />
      </div>
    </div>
  );
}
