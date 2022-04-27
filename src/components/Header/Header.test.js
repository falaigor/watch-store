import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should render Header component", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
