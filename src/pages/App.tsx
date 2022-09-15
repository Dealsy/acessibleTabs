import { Tabs } from "../components/tabs";
import { tabsData } from "../data";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <Tabs tabsData={tabsData} />
        <Outlet />
        <footer className="flex justify-center bottom-0 left-0 right-0 absolute">
          This is a very accessible web page
        </footer>
      </div>
    </div>
  );
}

export default App;
