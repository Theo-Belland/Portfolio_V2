import React from "react";

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <h1>Tableau de bord</h1>
      <div className="admin-header-actions">
        <button className="admin-btn">Nouvelle action</button>
      </div>
    </header>
  );
};

export default AdminHeader;
