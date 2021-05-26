import { render, screen } from "@testing-library/react";
import App from "./App";
import Search from "./Search";

test("renders search area", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search:/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders sorting option", () => {
  render(<Search />);
  const linkElement = screen.getByText(/Sort By:/i);
  expect(linkElement).toBeInTheDocument();
});
