import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
          <li className="flex-column list-group-item">
            <div className="d-flex flex-column">
              <input className="mt-1" value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              />
              <textarea className="mt-1" value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
              <button
                className="btn btn-danger mt-1"
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}
              >
                Add
              </button>
              <button
                className="btn btn-danger mt-1"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
            </div>
          </li>

          {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
                  <FaEllipsisV className="me-2" />
                  {module.name}
                  <button
                    className="btn"
                    onClick={() => dispatch(setModule(module))}>
                    <FaPencil />
                  </button>
                  <button className="btn"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    <FaTrash />
                  </button>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
                {
                  selectedModule._id === module._id && (
                    <ul className="list-group">
                      {module.lessons?.map((lesson: { name: string }, index: React.Key) => (
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
                  )
                }
              </li>
            ))}
        </ul>
      </div>
    </div >
  );
}
export default ModuleList;