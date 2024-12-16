import React from 'react';
import { Phone, Mail, MapPin, Camera, AlertTriangle } from 'lucide-react';

const PublicPortal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Public Safety Portal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Report an Incident</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Incident Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Suspicious Activity</option>
                <option>Traffic Violation</option>
                <option>Public Disturbance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe the incident"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Report
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Emergency Helpline</p>
                  <p className="text-gray-600">15</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">help@safekarachi.gov.pk</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Police Headquarters</p>
                  <p className="text-gray-600">Central Police Office, I.I. Chundrigar Road</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Safety Tips</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-blue-600" />
                <span>Stay in well-lit and monitored areas</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-blue-600" />
                <span>Report suspicious activities immediately</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPortal;