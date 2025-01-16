import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import axios from "axios";
import { toast } from "react-hot-toast";

const FamilyProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);

  const [formData, setFormData] = useState({
    parent1Name: "",
    parent1Relationship: "",
    parent1Education: "",
    parent1Occupation: "",
    parent1Employer: "",
    parent1Income: "",
    parent1Contact: "",
    parent2Name: "",
    parent2Relationship: "",
    parent2Education: "",
    parent2Occupation: "",
    parent2Employer: "",
    parent2Income: "",
    parent2Contact: "",
    guardianName: "",
    guardianRelationship: "",
    guardianEducation: "",
    guardianOccupation: "",
    guardianEmployer: "",
    guardianIncome: "",
    guardianContact: "",
    siblings: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      parent1Name,
      parent1Education,
      parent1Occupation,
      parent1Employer,
      parent1Income,
      parent1Contact,
      parent2Name,
      parent2Education,
      parent2Occupation,
      parent2Employer,
      parent2Income,
      parent2Contact,
      guardianName,
      guardianRelationship,
      guardianEducation,
      guardianOccupation,
      guardianEmployer,
      guardianIncome,
      guardianContact,
      siblings,
    } = formData;
    try {
      const { formData } = await axios.post("/Family", {
        parent1Name,
        parent1Education,
        parent1Occupation,
        parent1Employer,
        parent1Income,
        parent1Contact,
        parent2Name,
        parent2Education,
        parent2Occupation,
        parent2Employer,
        parent2Income,
        parent2Contact,
        guardianName,
        guardianRelationship,
        guardianEducation,
        guardianOccupation,
        guardianEmployer,
        guardianIncome,
        guardianContact,
        siblings,
      });
      if (formData.error) {
        toast.error("Error!");
      } else {
        setFormData({});
        toast.success("Family information submitted successfully!");
      }
    } catch (error) {
      console.log("Error!");
    }
    goToNextPage();
  };

  const goToNextPage = () => {
    setCurrentStep(2);
    navigate("/EducationalProfile");
  };

  return (
    <div
      className="containers"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <form onSubmit={handleSubmit}>
        <div
          className="card shadow p-4"
          style={{
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            flex: 1,
            overflowY: "auto",
          }}
        >
          <h1 className="mb-4">
            <i className="bi bi-people-fill"></i> Family Background
          </h1>
          <hr className="divider" />
          <div className="row">
            <div className="col-md-6">
              <h5>Mother's Information:</h5>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent1Name}
                  onChange={(e) =>
                    setFormData({ ...formData, parent1Name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Educational Attainment:</label>
                <select
                  className="form-select"
                  aria-label="Educational Attainment"
                  value={formData.parent1Education}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent1Education: e.target.value,
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Junior High School">Junior High School</option>
                  <option value="Senior High School">Senior High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent1Occupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent1Occupation: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fill if employed."
                  value={formData.parent1Employer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent1Employer: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.parent1Income}
                  onChange={(e) =>
                    setFormData({ ...formData, parent1Income: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent1Contact}
                  onChange={(e) =>
                    setFormData({ ...formData, parent1Contact: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <h5>Father's Information:</h5>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent2Name}
                  onChange={(e) =>
                    setFormData({ ...formData, parent2Name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Educational Attainment:</label>
                <select
                  className="form-select"
                  aria-label="Educational Attainment"
                  value={formData.parent2Education}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent2Education: e.target.value,
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Junior High School">Junior High School</option>
                  <option value="Senior High School">Senior High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent2Occupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent2Occupation: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fill if employed."
                  value={formData.parent2Employer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parent2Employer: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.parent2Income}
                  onChange={(e) =>
                    setFormData({ ...formData, parent2Income: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.parent2Contact}
                  onChange={(e) =>
                    setFormData({ ...formData, parent2Contact: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <hr className="divider" />

          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-3">Guardian</h4>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.guardianName}
                  onChange={(e) =>
                    setFormData({ ...formData, guardianName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Relationship:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.guardianRelationship}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guardianRelationship: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Educational Attainment:</label>
                <select
                  className="form-select"
                  aria-label="Educational Attainment"
                  value={formData.guardianEducation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guardianEducation: e.target.value,
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Junior High School">Junior High School</option>
                  <option value="Senior High School">Senior High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.guardianOccupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guardianOccupation: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Fill if employed."
                  value={formData.guardianEmployer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guardianEmployer: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.guardianIncome}
                  onChange={(e) =>
                    setFormData({ ...formData, guardianIncome: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.guardianContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guardianContact: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="mb-3">Siblings</h4>
              <div className="mb-3">
                <label className="form-label">Number of Siblings:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Place N/A if none."
                  value={formData.siblings}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      siblings: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Link to="/ApplicantProfile">
              <button className="btn btn-success mt-4">Back Page</button>
            </Link>
            <Link to="/EducationalProfile">
              <button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmit}
              >
                Next Page
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FamilyProfile;
