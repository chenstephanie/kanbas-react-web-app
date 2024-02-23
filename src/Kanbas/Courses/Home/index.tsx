import ModuleList from "../Modules/List";
import Status from "./Status";
import "./index.css";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex flex-row full-width">
        <ModuleList />
        <Status />
      </div>
    </div>
  );
}
export default Home;