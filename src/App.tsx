import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LiveFeeds from './pages/LiveFeeds';
import SurveillanceZones from './pages/SurveillanceZones';
import IncidentReporting from './pages/IncidentReporting';
import Analytics from './pages/Analytics';
import PublicPortal from './pages/PublicPortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/live-feeds" element={<LiveFeeds />} />
              <Route path="/zones" element={<SurveillanceZones />} />
              <Route path="/incidents" element={<IncidentReporting />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/public-portal" element={<PublicPortal />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;