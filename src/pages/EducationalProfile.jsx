import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import ProgressHeader
import axios from "axios";
import { toast } from "react-hot-toast";

const EducationalProfile = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(3); // Assuming this is step 2 in the form

  const [formData, setFormData] = useState({
    elementary: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      yearGraduated: "",
    },
    juniorHighSchool: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      yearGraduated: "",
    },
    seniorHighSchool: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      strand: "",
      yearGraduated: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elementary, juniorHighSchool, seniorHighSchool } = formData;
    try {
      const { formData } = await axios.post("/Education", {
        elementary,
        juniorHighSchool,
        seniorHighSchool,
      });
      if (formData.error) {
        toast.error("Error!");
      } else {
        setFormData({});
        toast.success("Education submitted successfully!");
      }
    } catch (error) {
      console.log("Error!");
    }
    goToNextPage();
  };

  const goToNextPage = () => {
    setCurrentStep(3);
    navigate("/UploadRequirements");
  };

  return (
    <div
      className="containers"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* ProgressHeader component */}
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />{" "}
      <form onSubmit={handleSubmit}>
        {/* Card Container */}
        <div
          className="card shadow p-4"
          style={{
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="mb-4">
            <i className="bi bi-mortarboard-fill  "></i> Educational Attainment
          </h1>
          <hr className="divider" />
          {/* Elementary Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Elementary</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.elementary.schoolName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      elementary: {
                        ...formData.elementary,
                        schoolName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.elementary.schoolAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      elementary: {
                        ...formData.elementary,
                        schoolAddress: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <select
                  className="form-select"
                  aria-label="Type of School"
                  value={formData.elementary.typeOfSchool}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      elementary: {
                        ...formData.elementary,
                        typeOfSchool: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.elementary.yearGraduated}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      elementary: {
                        ...formData.elementary,
                        yearGraduated: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </section>
          <hr className="divider" />

          {/* Junior High School Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Junior High School</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.juniorHighSchool.schoolName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      juniorHighSchool: {
                        ...formData.juniorHighSchool,
                        schoolName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.juniorHighSchool.schoolAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      juniorHighSchool: {
                        ...formData.juniorHighSchool,
                        schoolAddress: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <select
                  className="form-select"
                  aria-label="Type of School"
                  value={formData.juniorHighSchool.typeOfSchool}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      juniorHighSchool: {
                        ...formData.juniorHighSchool,
                        typeOfSchool: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.juniorHighSchool.yearGraduated}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      juniorHighSchool: {
                        ...formData.juniorHighSchool,
                        yearGraduated: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </section>
          <hr className="divider" />

          {/* Senior High School Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Senior High School</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.seniorHighSchool.schoolName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seniorHighSchool: {
                        ...formData.seniorHighSchool,
                        schoolName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.seniorHighSchool.schoolAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seniorHighSchool: {
                        ...formData.seniorHighSchool,
                        schoolAddress: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <select
                  className="form-select"
                  aria-label="Type of School"
                  value={formData.seniorHighSchool.typeOfSchool}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seniorHighSchool: {
                        ...formData.seniorHighSchool,
                        typeOfSchool: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Strand:</label>
                <select
                  className="form-select"
                  aria-label="Strand"
                  value={formData.seniorHighSchool.strand}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seniorHighSchool: {
                        ...formData.seniorHighSchool,
                        strand: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Select:</option>
                  <option value="STEM">STEM</option>
                  <option value="ABM">ABM</option>
                  <option value="HUMSS">HUMSS</option>
                  <option value="GAS">GAS</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.seniorHighSchool.yearGraduated}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seniorHighSchool: {
                        ...formData.seniorHighSchool,
                        yearGraduated: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </section>

          {/* Nav Button */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/FamilyProfile">
              <button type="submit" className="btn btn-success mt-4">
                Back Page
              </button>
            </Link>
            <Link to="/UploadRequirements">
              <button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>
                Next Page
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationalProfile;
