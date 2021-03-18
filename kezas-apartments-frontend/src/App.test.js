import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
