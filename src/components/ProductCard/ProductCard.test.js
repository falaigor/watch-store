import { fireEvent, render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

const product = {
  title: "um relogio bonito",
  price: "22.00",
  image:
    "https://cdn.shopify.com/s/files/1/0540/3036/8945/products/Relogio_Rolex_Submariner_Blue1M@2x.jpg",
};

const addToCart = jest.fn();

const renderProductCart = () =>
  render(<ProductCard product={product} addToCart={addToCart} />);

describe("ProductCard", () => {
  it("should render ProductCard component", () => {
    renderProductCart();

    expect(screen.getByTestId("product-card")).toBeInTheDocument();
  });

  it("should display proper content", () => {
    renderProductCart();

    expect(
      screen.getByText(new RegExp(product.title, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, "i"))
    ).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("should call props.addToCart() when button gets clicked", async () => {
    renderProductCart();

    const button = screen.getByRole("button");
    await fireEvent.click(button);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
