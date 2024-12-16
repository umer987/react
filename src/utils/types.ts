export interface Incident {
  id: number;
  type: string;
  location: string;
  timestamp: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
}

export interface SurveillanceZone {
  id: number;
  name: string;
  cameras: number;
  status: 'Active' | 'Maintenance';
}

export interface Camera {
  id: number;
  name: string;
  location: string;
}