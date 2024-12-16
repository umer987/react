import React from 'react';
import { AlertTriangle, Camera, MapPin, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Camera, label: 'Active Cameras', value: '1,234' },
    { icon: AlertTriangle, label: 'Active Incidents', value: '23' },
    { icon: MapPin, label: 'Surveillance Zones', value: '56' },
    { icon: Users, label: 'Field Officers', value: '189' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Command Center Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{label}</p>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Incidents</h2>
          {/* Incident list would go here */}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Active Alerts</h2>
          {/* Alerts would go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;