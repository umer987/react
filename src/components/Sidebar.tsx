import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Layout, 
  Camera, 
  Map, 
  FileText, 
  BarChart2, 
  Users 
} from 'lucide-react';

const Sidebar = () => {
  const links = [
    { to: "/", icon: Layout, label: "Dashboard" },
    { to: "/live-feeds", icon: Camera, label: "Live Feeds" },
    { to: "/zones", icon: Map, label: "Surveillance Zones" },
    { to: "/incidents", icon: FileText, label: "Incident Reporting" },
    { to: "/analytics", icon: BarChart2, label: "Analytics" },
    { to: "/public-portal", icon: Users, label: "Public Portal" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)]">
      <nav className="p-4">
        <ul className="space-y-2">
          {links.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;