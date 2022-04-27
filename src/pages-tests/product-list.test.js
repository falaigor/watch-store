import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../pages";
import { makeServer } from "../miragejs/server";

const renderProductList = () => render(<ProductList />);

describe("ProductList", () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render ProductList", () => {
    renderProductList();

    expect(screen.getByTestId("product-list")).toBeInTheDocument();
  });

  it("should render the ProductCard component 10 times", async () => {
    server.createList("product", 10);

    renderProductList();

    await waitFor(() => {
      expect(screen.getAllByTestId("product-card")).toHaveLength(10);
    });
  });

  // it("should render the no products message", () => {});

  // it("should render the Search component", () => {});

  // it("should filter the product list when a search is performed", () => {});

  // it("should display error message when promise rejects ", () => {});

  // it("should display the tottal quantity of products", () => {});

  // it("should display product (singular) when there is onlye 1 product", () => {});
});
