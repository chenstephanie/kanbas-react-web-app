import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="d-flex flex-column flex-fill">
      <div className="d-flex justify-content-end p-2">
        <button type="button" className="btn btn-outline-secondary m-1">Collapse All</button>
        <button type="button" className="btn btn-outline-secondary m-1">View Progress</button>
        <div className="m-1">
          <select className="form-select">
            <option selected><FaRegCheckCircle />Publish All</option>
          </select>
        </div>
        <button type="button" className="btn btn-danger m-1"><FaPlus /> Module</button>
        <button type="button" className="btn btn-outline-secondary m-1"><FaEllipsisV /></button>

      </div>
      <div>
        <ul className="list-group wd-modules flex-fill">
          {modulesList.map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson, index) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}
export default ModuleList;