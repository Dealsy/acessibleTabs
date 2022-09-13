import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { BrowserRouter, Outlet, Router } from "react-router-dom";
import { Tabs } from "../components/tabs";
import { tabsData } from "../data";

test("Link Navigation", async () => {
  render(<Tabs tabsData={tabsData} />, {
    wrapper: BrowserRouter,
  });
  const user = userEvent.setup();
  // verify page content for expected route
  expect(screen.getByText(/motorbikes/i)).toBeInTheDocument();
  await user.click(screen.getByText(/motorbikes/i));

  // check that the content changed to the new page
  expect(screen.getByText("motorbikes")).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/badRoute");
  render(
    <Router location={history.location} navigator={history}>
      <Outlet />
    </Router>
  );

  expect(screen.getByText(/404: Not Found/i)).toBeInTheDocument();
});
