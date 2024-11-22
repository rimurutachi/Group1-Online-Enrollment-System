import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/landingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentPage from './pages/StudentPage.jsx';
import FacultyPage from './pages/FacultyPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/FacultyPage" element={<FacultyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
