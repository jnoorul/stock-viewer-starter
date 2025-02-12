import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Hello World", () => {
  it("should display Hello World", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
