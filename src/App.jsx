import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaRelevePage from './LaRelevePage';
import Sentinel from './Sentinel';
import AuthPage from './AuthPage';
import RolesPage from './RolesPage';
import MbtiTest from './MbtiTest';
import MentionsLegales from './MentionsLegales';
import CookieBanner from './CookieBanner';
import DashboardRecruteur from './DashboardRecruteur';
import RecruteurTypeSelector from './RecruteurTypeSelector';
import PatronTest from './PatronTest';
import RHTest from './RHTest';
import DashboardCandidat from './DashboardCandidat';
import MethodePage from './MethodePage';
import TarifsPage from './TarifsPage';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<LaRelevePage />} />
        <Route path="/methode" element={<MethodePage />} />
        <Route path="/tarifs" element={<TarifsPage />} />
        <Route path="/connexion" element={<AuthPage />} />
        <Route path="/choix-du-poste" element={<RolesPage />} />
        <Route path="/mbti/:roleId" element={<MbtiTest />} />
        <Route path="/test/type-recruteur" element={<RecruteurTypeSelector />} />
        <Route path="/test/patron" element={<PatronTest />} />
        <Route path="/test/rh" element={<RHTest />} />
        <Route path="/test/:roleId" element={<Sentinel />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/dashboard-recruteur" element={<DashboardRecruteur />} />
        <Route path="/dashboard-candidat" element={<DashboardCandidat />} />
      </Routes>
    </Router>
  );
}
