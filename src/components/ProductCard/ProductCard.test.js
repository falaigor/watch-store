import { ProductCard } from "./ProductCard";
import { render, screen } from "@testing-library/react";

describe("ProductCard", () => {
  it("should render ProductCard component", () => {
    render(<ProductCard />);

    expect(screen.getByTestId("product-card")).toBeInTheDocument();
  });
});
