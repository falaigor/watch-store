import { fireEvent, render, screen } from "@testing-library/react";
import { CartItem } from "./CartItem";

const product = {
  title: "um relogio bonito",
  price: "22.00",
  image:
    "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};

const renderCartItem = () => render(<CartItem product={product} />);

describe("CartItem", () => {
  it("should render CartItem component", () => {
    renderCartItem();

    expect(screen.getByTestId("cart-item")).toBeInTheDocument();
  });

  it("should display proper content", () => {
    renderCartItem();

    const image = screen.getByTestId("image");

    expect(
      screen.getByText(new RegExp(product.title, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, "i"))
    ).toBeInTheDocument();
    expect(image).toHaveProperty("src");
    expect(image).toHaveProperty("alt", product.title);
  });

  it("should display 1 as initial quantity", () => {
    renderCartItem();

    expect(screen.getByTestId("quantity").textContent).toBe("1");
  });

  it("should increase quantity by 1 when second button is clicked", async () => {
    renderCartItem();

    const [, button] = screen.getAllByRole("button");

    await fireEvent.click(button);

    expect(screen.getByTestId("quantity").textContent).toBe("2");
  });

  it("should decrease quantity by 1 when first button is clicked", async () => {
    renderCartItem();

    const [buttonDecrease, buttonIncrease] = screen.getAllByRole("button");
    const quantity = screen.getByTestId("quantity");

    await fireEvent.click(buttonIncrease);
    expect(quantity.textContent).toBe("2");

    await fireEvent.click(buttonDecrease);
    expect(quantity.textContent).toBe("1");
  });

  it("should not go below zero in the quantity", async () => {
    renderCartItem();

    const [buttonDecrease] = screen.getAllByRole("button");
    const quantity = screen.getByTestId("quantity");

    expect(quantity.textContent).toBe("1");

    await fireEvent.click(buttonDecrease);
    await fireEvent.click(buttonDecrease);

    expect(quantity.textContent).toBe("0");
  });
});
