import React, { useState, useEffect } from "react";
import Layout from "../components/Layout"; // Import the Layout component
import styles from "./Masterlist.module.css"; // Module CSS for styling

const Masterlist = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Mock fetch for now. Replace with actual API call.
    fetch("http://your-api-endpoint/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalStudents = students.length;
  const totalEnrolled = students.filter((s) => s.studentType === "Regular").length;
  const totalCourses = [...new Set(students.map((s) => s.course))].length;

  return (
    <Layout>
      <div className={styles.masterlist}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryBox}>
            <h3>Total Students</h3>
            <p>{totalStudents}</p>
          </div>
          <div className={styles.summaryBox}>
            <h3>Total Enrolled</h3>
            <p>{totalEnrolled}</p>
          </div>
          <div className={styles.summaryBox}>
            <h3>Total Courses</h3>
            <p>{totalCourses}</p>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Student Type</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.studentType}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Masterlist;