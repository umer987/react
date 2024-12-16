import React from 'react';
import { AlertCircle, Filter } from 'lucide-react';

const IncidentReporting = () => {
  const incidents = [
    {
      id: 1,
      type: 'Suspicious Activity',
      location: 'Saddar Market',
      timestamp: '2024-03-15 14:30',
      status: 'Open',
      priority: 'High'
    },
    {
      id: 2,
      type: 'Traffic Violation',
      location: 'Clifton Bridge',
      timestamp: '2024-03-15 13:15',
      status: 'In Progress',
      priority: 'Medium'
    },
    {
      id: 3,
      type: 'Public Disturbance',
      location: 'Tariq Road',
      timestamp: '2024-03-15 12:45',
      status: 'Resolved',
      priority: 'Low'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Incident Reports</h1>
        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidents.map((incident) => (
              <tr key={incident.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {incident.type}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {incident.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {incident.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    incident.status === 'Open' ? 'bg-red-100 text-red-800' :
                    incident.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {incident.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    incident.priority === 'High' ? 'bg-red-100 text-red-800' :
                    incident.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {incident.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentReporting;