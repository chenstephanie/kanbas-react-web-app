import { FaFileImport, FaBell, FaChartBar, FaBullhorn, FaBullseye, FaRegArrowAltCircleRight, FaBan, FaCheckCircle, FaCalendar } from "react-icons/fa";

function Status() {
  const statusButtons = [
    { text: 'Import Existing Content', icon: <FaFileImport /> },
    { text: 'Import From Commons', icon: <FaRegArrowAltCircleRight /> },
    { text: 'Choose Home Page', icon: <FaBullseye /> },
    { text: 'View Course Stream', icon: <FaChartBar /> },
    { text: 'New Announcement', icon: <FaBullhorn /> },
    { text: 'New Analytics', icon: <FaChartBar /> },
    { text: 'View Course Notifications', icon: <FaBell /> }
  ]

  const lectures = [
    { course: "CS4550", date: "Sep 7 at 11:45am" },
    { course: "ARTS2340", date: "Sep 7 at 11:45am" },
    { course: "CS1800", date: "Sep 9 at 11:45am" },
  ]

  return (
    <div className="wd-status">
      <h3>Course Status</h3>
      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group p-1" role="group">
          <button type="button" className="btn btn-outline-secondary">
            <FaBan />&nbsp;Unpublish
          </button>
        </div>
        <div className="btn-group p-1" role="toolbar">
          <button type="button" className="btn btn-success">
            <FaCheckCircle />&nbsp;Published</button>
        </div>
      </div>
      <div className="d-flex flex-column btn-toolbar" role="toolbar">
        {statusButtons.map((button) => (
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-secondary text-start m-1">
              {button.icon}&nbsp;{button.text}
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex flex-row">
        <div className="p-2">
          Coming Up
        </div>
        <div className="p-2">
          <FaCalendar />
        </div>
        <div className="p-2">
          <a className="link-danger"> View Calendar </a>
        </div>
      </div>
      {lectures.map((lecture) => (
        <div className="d-flex flex-row">
          <div className="p-2"><FaCalendar /></div >
          <div className="flex-column p-2">
            <div className="text-danger">Lecture</div>
            <div>{lecture.course}</div>
            <div>{lecture.date}</div>
          </div>
        </div>
      ))}
    </div >
  )
}

export default Status;