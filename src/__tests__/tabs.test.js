import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
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
