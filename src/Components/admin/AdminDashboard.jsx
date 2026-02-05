import React from "react";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Bienvenue sur le dashboard admin</h2>
      <div className="admin-widgets">
        <div className="admin-widget">
          <h3>Visiteurs</h3>
          <p>1 245</p>
        </div>
        <div className="admin-widget">
          <h3>Utilisateurs</h3>
          <p>87</p>
        </div>
        <div className="admin-widget">
          <h3>Messages</h3>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
