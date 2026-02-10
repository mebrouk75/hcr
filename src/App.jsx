import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaRelevePage from './LaRelevePage';
import Sentinel from './Sentinel';
import AuthPage from './AuthPage';
import RolesPage from './RolesPage';

import MbtiTest from './MbtiTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaRelevePage />} />
        <Route path="/connexion" element={<AuthPage />} />
        <Route path="/choix-du-poste" element={<RolesPage />} />
        <Route path="/mbti/:roleId" element={<MbtiTest />} />
        <Route path="/test/:roleId" element={<Sentinel />} />
      </Routes>
    </Router>
  );
}
