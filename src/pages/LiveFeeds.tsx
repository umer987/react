import React from 'react';
import { Grid2X2, Grid3X3 } from 'lucide-react';

const LiveFeeds = () => {
  const cameras = [
    { id: 1, name: 'Saddar Area Camera 1', location: 'Saddar, Karachi' },
    { id: 2, name: 'Clifton Bridge Camera 3', location: 'Clifton, Karachi' },
    { id: 3, name: 'II Chundrigar Road Camera 2', location: 'II Chundrigar Road' },
    { id: 4, name: 'Tariq Road Camera 4', location: 'Tariq Road, Karachi' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Live CCTV Feeds</h1>
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Grid2X2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Grid3X3 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-video bg-gray-800 relative">
              {/* This would be replaced with actual CCTV feed */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{camera.name}</p>
                <p className="text-sm opacity-80">{camera.location}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 flex items-center">
                  ● Live
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Full Screen
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeeds;