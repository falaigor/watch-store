import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCartStore } from "../../../store/cart";
import { setAutoFreeze } from "immer";
import userEvent from "@testing-library/user-event";

import { CartItem } from "./CartItem";

setAutoFreeze(false);

const product = {
  title: "um relogio bonito",
  price: "22.00",
  image:
    "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};

const renderCartItem = () => render(<CartItem product={product} />);

describe("CartItem", () => {
  let result;
  let reset;

  beforeEach(() => {
    result = renderHook(() => useCartStore()).result;
    reset = result.current.actions.reset;
  });

  afterEach(() => {
    jest.clearAllMocks();
    act(() => reset());
  });

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

  it("should call remove() when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "remove");

    renderCartItem();

    const button = screen.getByTestId("button-remove");

    await userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });

  it("should call increase() when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "increase");

    renderCartItem();

    const button = screen.getByTestId("button-increase");

    await userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });

  it("should call decrease() when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "decrease");

    renderCartItem();

    const button = screen.getByTestId("button-decrease");

    await userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });
});
