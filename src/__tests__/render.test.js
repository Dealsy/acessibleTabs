import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tabs } from "../components/tabs";
import { tabsData } from "../data";
import App from "../pages/App";
import TabContent from "../pages/tabContent";

test("renders the App", () => {
  render(<App />, { wrapper: BrowserRouter });
});

test("renders the Tabs", () => {
  render(<Tabs tabsData={tabsData} />, { wrapper: BrowserRouter });
});

test("renders the Tabs Content", () => {
  render(<TabContent title="List of Motorbikes" list={["R1", "r6"]} />, {
    wrapper: BrowserRouter,
  });
});

test("renders Route children", () => {
  render(
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="motorbikes"
          element={
            <TabContent title="List of Motorbikes" list={["R1", "r6"]} />
          }
        />
      </Route>
    </Routes>,
    {
      wrapper: BrowserRouter,
    }
  );

  expect(screen.getByText("motorbikes")).toBeInTheDocument();
});
