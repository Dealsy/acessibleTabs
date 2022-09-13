import { Tabs } from "../components/tabs";
import { tabsData } from "../data";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col justify-center">
        <Tabs tabsData={tabsData} />
        <span className="m-auto">{location.pathname}</span>
        <Outlet />
        <footer className="flex justify-center bottom-0 left-0 right-0 absolute">
          This is a very accessible web page
        </footer>
      </div>
    </div>
  );
}

export default App;
