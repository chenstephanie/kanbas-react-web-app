import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId, ...other } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1 className="p-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item link-danger"><HiMiniBars3 />Course {course?.name}</li>
          <li className="breadcrumb-item active">{Object.values(other)[0]}</li>
        </ol>
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom" element={<h1>Zoom</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People F</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;