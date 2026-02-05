

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: "📊",
    label: "Tableau de bord",
    path: "/admin",
    submenu: null
  },
  {
    icon: "👥",
    label: "Utilisateurs",
    path: "/admin/utilisateurs",
    submenu: [
      { label: "Liste", path: "/admin/utilisateurs/liste" },
      { label: "Ajouter", path: "/admin/utilisateurs/ajouter" }
    ]
  },
  {
    icon: "📁",
    label: "Projets",
    path: "/admin/projets",
    submenu: [
      { label: "Liste des projets", path: "/admin/projets/liste" },
      { label: "Ajout de projet", path: "/admin/projets/ajouter" }
    ]
  },
  {
    icon: "⚙️",
    label: "Paramètres",
    path: "/admin/parametres",
    submenu: [
      { label: "Profil", path: "/admin/parametres/profil" },
      { label: "Sécurité", path: "/admin/parametres/securite" },
      { label: "Application", path: "/admin/parametres/app" }
    ]
  },
  {
    icon: "🚪",
    label: "Déconnexion",
    path: "/login",
    submenu: null
  }
];

const AdminSidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();

  const handleMenuClick = (index, path, hasSubmenu) => {
    if (hasSubmenu) {
      setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
    } else {
      navigate(path);
    }
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-profile">
        <img src="https://ui-avatars.com/api/?name=Admin&background=a259ff&color=fff" alt="Admin avatar" className="admin-avatar" />
        <span className="admin-name">Admin</span>
      </div>
      <ul>
        {menuItems.map((item, idx) => (
          <React.Fragment key={item.label}>
            <li
              className={idx === 0 ? "active" : ""}
              onClick={() => handleMenuClick(idx, item.path, !!item.submenu)}
              style={{position:'relative', display:'flex', alignItems:'center', gap: item.submenu ? '0.7rem' : '0.3rem'}}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
              {item.submenu && (
                <span style={{marginLeft: 'auto', fontSize: '1.2em'}}>{openMenus[idx] ? '−' : '+'}</span>
              )}
            </li>
            {item.submenu && openMenus[idx] && (
              <ul className="sidebar-submenu">
                {item.submenu.map(sub => (
                  <li key={sub.label} onClick={() => navigate(sub.path)}>{sub.label}</li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
