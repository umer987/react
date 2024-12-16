import React from 'react';
import { Map, Plus } from 'lucide-react';

const SurveillanceZones = () => {
  const zones = [
    { id: 1, name: 'Saddar Commercial Zone', cameras: 45, status: 'Active' },
    { id: 2, name: 'Clifton Residential Area', cameras: 32, status: 'Active' },
    { id: 3, name: 'Port Area', cameras: 28, status: 'Maintenance' },
    { id: 4, name: 'II Chundrigar Financial District', cameras: 56, status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Surveillance Zones</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          <span>Add Zone</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {zones.map((zone) => (
              <div key={zone.id} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Map className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{zone.name}</h3>
                      <p className="text-sm text-gray-600">{zone.cameras} Cameras</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    zone.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {zone.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveillanceZones;