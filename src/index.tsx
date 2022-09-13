import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import TabContent from "./pages/tabContent";
import NotFound from "./pages/404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="motorbikes"
            element={
              <TabContent
                title="List of Motorbikes"
                list={["R1", "r6", "ZX6r", "ZX636", "CBR 600"]}
              />
            }
          />
          <Route
            path="cars"
            element={
              <TabContent
                title={"List of Cars"}
                list={["GTR 35", "GTR 34", "Supra", "Dodge Demon"]}
              />
            }
          />
          <Route
            path="jets"
            element={
              <TabContent
                title="List of Jets"
                list={["F-16", "F-18", "F-22"]}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
