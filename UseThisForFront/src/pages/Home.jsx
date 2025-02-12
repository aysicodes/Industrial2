import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import logo from "../assets/Ala-too_International_University_Seal.png";
import profileIcon from "../assets/free-icon-student-4211262.png";
import logoutIcon from "../assets/exit.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState({});
  const [courseScores, setCourseScores] = useState({});
  const [showChart, setShowChart] = useState(false);

  // Sample courses - replace with your actual courses
  const courses = [
    { id: 1, name: "Mathematics", uniqueCompetences: ["Problem Solving", "Analytical Thinking"] },
    { id: 2, name: "Physics", uniqueCompetences: ["Scientific Method", "Data Analysis"] },
    { id: 3, name: "Programming", uniqueCompetences: ["Coding", "Algorithm Design"] },
    { id: 4, name: "Database", uniqueCompetences: ["Data Modeling", "Query Optimization"] },
    { id: 5, name: "Web Development", uniqueCompetences: ["Frontend Design", "Backend Integration"] }
  ];

  const handleCourseSelect = (boxIndex, courseId) => {
    const selectedCourse = courses.find(course => course.id === parseInt(courseId));
    setSelectedCourses({ ...selectedCourses, [boxIndex]: selectedCourse });
  };

  const handleScoreChange = (boxIndex, value) => {
    if (value >= 0 && value <= 100) {
      setCourseScores({ ...courseScores, [boxIndex]: value });
    }
  };

  const handleVisualize = () => {
    if (Object.keys(selectedCourses).length === 3 && 
        Object.keys(courseScores).length === 3) {
      setShowChart(true);
    }
  };

  const calculateCompetencyScores = () => {
    if (Object.keys(selectedCourses).length === 0) return { labels: [], datasets: [] };

    const sharedScore = Object.values(courseScores).length > 0 
      ? Object.values(courseScores).reduce((sum, score) => sum + Number(score), 0) / Object.values(courseScores).length
      : 0;

    const uniqueCompetencyScores = Object.entries(selectedCourses).flatMap(([boxIndex, course]) => {
      const score = courseScores[boxIndex] || 0;
      return course.uniqueCompetences.map(comp => ({
        competency: comp,
        score: Number(score) || 0
      }));
    });

    return {
      labels: ["Shared Competency", ...uniqueCompetencyScores.map(comp => comp.competency)],
      datasets: [{
        label: "Competency Scores",
        data: [sharedScore, ...uniqueCompetencyScores.map(comp => comp.score)],
        backgroundColor: ["#003087", ...uniqueCompetencyScores.map(() => `rgba(0, 48, 135, ${Math.random() * 0.7 + 0.3})`)],
        borderColor: ["#002266", ...uniqueCompetencyScores.map(() => "#002266")],
        borderWidth: 1
      }]
    };
  };

  return (
    <div className="home-container">
      <header className="header">
        <img src={logo} alt="Ala-Too University Logo" className="university-logo" onClick={() => navigate("/")} />
        <div className="header-icons">
          <img src={profileIcon} alt="Profile" className="icon" onClick={() => navigate("/profile")} />
          <img 
            src={logoutIcon} 
            alt="Logout" 
            className="icon" 
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          />
        </div>
      </header>

      <div className="course-selection">
        <h2 className="section-title">Select Three Courses and Their Grades</h2>
        <div className="course-grid">
          {[1, 2, 3].map((boxIndex) => (
            <div key={boxIndex} className="course-box">
              <select
                className="course-select"
                value={selectedCourses[boxIndex]?.id || ""}
                onChange={(e) => handleCourseSelect(boxIndex, e.target.value)}
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="score-input"
                placeholder="Enter grade (0-100)"
                min="0"
                max="100"
                value={courseScores[boxIndex] || ""}
                onChange={(e) => handleScoreChange(boxIndex, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button 
          className="visualize-button"
          onClick={handleVisualize}
          disabled={Object.keys(selectedCourses).length !== 3 || Object.keys(courseScores).length !== 3}
        >
          Visualize Competencies
        </button>
      </div>

      {showChart && (
        <div className="chart-container">
          <h2 className="chart-title">Competency Scores</h2>
          <Bar 
            data={calculateCompetencyScores()} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;