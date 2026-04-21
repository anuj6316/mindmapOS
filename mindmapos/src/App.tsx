import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatApp from './pages/ChatApp';
import LandingPage from './pages/LandingPage';
import DownloadPage from './pages/DownloadPage';
import SetupPage from './pages/SetupPage';
import MarketplacePage from './pages/MarketplacePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ChatApp />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
