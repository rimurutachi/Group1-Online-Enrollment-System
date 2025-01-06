import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentPage from './pages/StudentPage.jsx';
import FacultyPage from './pages/FacultyPage.jsx';
import RegistrationForm from './pages/RegistrationForm.jsx';
import ApplicantProfile from './pages/ApplicantProfile.jsx';
import FamilyProfile from './pages/FamilyProfile.jsx';
import EducationalProfile from './pages/EducationalProfile.jsx';
import UploadRequirements from './pages/UploadRequirements.jsx';
import ScheduleAppointment from './pages/ScheduleAppointment.jsx';
import axios from 'axios';

function App() {
  const [registerData, setRegisterData] = useState([]);
  const [applicantData, setApplicantData] = useState([]);
  const [familyData, setFamilyData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [requirementsData, setRequirementsData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const registerResponse = await axios.get('/RegistrationForm');
        setRegisterData(registerResponse.data);

        const applicantResponse = await axios.get('/ApplicantProfile');
        setApplicantData(applicantResponse.data);

        const familyResponse = await axios.get('/FamilyProfile');
        setFamilyData(familyResponse.data);

        const educationResponse = await axios.get('/EducationalProfile');
        setEducationData(educationResponse.data);

        const requirementsResponse = await axios.get('/UploadRequirements');
        setRequirementsData(requirementsResponse.data);

        const scheduleResponse = await axios.get('/ScheduleAppointment');
        setScheduleData(scheduleResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/FacultyPage" element={<FacultyPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/ApplicantProfile" element={<ApplicantProfile />} />
        <Route path="/FamilyProfile" element={<FamilyProfile />} />
        <Route path="/EducationalProfile" element={<EducationalProfile />} />
        <Route path="/UploadRequirements" element={<UploadRequirements />} />
        <Route path="/ScheduleAppointment" element={<ScheduleAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
