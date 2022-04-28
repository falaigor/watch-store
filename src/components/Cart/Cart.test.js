import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import { useCartStore } from "../../../store/cart";
import { makeServer } from "../../miragejs/server";
import userEvent from "@testing-library/user-event";
import { setAutoFreeze } from "immer";
import { Cart } from "./Cart";

setAutoFreeze(false);

describe("Cart", () => {
  let server;
  let result;
  let add;
  let toggle;
  let reset;
  let open;
  let spy;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
    result = renderHook(() => useCartStore()).result;
    add = result.current.actions.add;
    reset = result.current.actions.reset;
    toggle = result.current.actions.toggle;
    spy = jest.spyOn(result.current.actions, "removeAll");

    act(() => toggle());
    open = result.current.state.open;
  });

  afterEach(() => {
    server.shutdown();
    jest.clearAllMocks();
    act(() => reset());
  });

  const renderCart = () => render(<Cart isOpen={open} onClose={toggle} />);

  it("should render Cart component", () => {
    renderCart();

    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });

  it("should display 2 products cards", () => {
    const products = server.createList("product", 2);

    renderCart();

    act(() => {
      for (const product of products) {
        add(product);
      }
    });

    expect(screen.getAllByTestId("cart-item")).toHaveLength(2);
  });

  it("should remove all products when clear cart button is clicked", async () => {
    const products = server.createList("product", 2);

    renderCart();

    act(() => {
      for (const product of products) {
        add(product);
      }
    });

    expect(screen.getAllByTestId("cart-item")).toHaveLength(2);

    const button = screen.getByTestId("button-clear-cart");

    await userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should not display clear cart button if no products are in the cart", async () => {
    renderCart();

    expect(screen.queryByTestId("button-clear-cart")).not.toBeInTheDocument();
  });
});
