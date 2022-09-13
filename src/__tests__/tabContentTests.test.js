import { render, screen } from "@testing-library/react";
import TabContent from "../pages/tabContent";

test("Renders h1 element", () => {
  render(<TabContent title="List of Motorbikes" list={["R1", "r6"]} />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

// Test .map function in TabContent component
test("Renders list of motorbikes", () => {
  render(<TabContent title="List of Motorbikes" list={["R1", "r6"]} />);
  expect(screen.getByText("R1")).toBeInTheDocument();
});
