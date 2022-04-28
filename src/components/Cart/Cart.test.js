import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen, waitFor } from "@testing-library/react";
import { useCartStore } from "../../../store/cart";
import { makeServer } from "../../miragejs/server";
import userEvent from "@testing-library/user-event";

import { Cart } from "./Cart";

describe("Cart", () => {
  let server;
  let result;
  let spy;
  let add;
  let toggle;
  let reset;
  let open;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
    result = renderHook(() => useCartStore()).result;
    add = result.current.actions.add;
    reset = result.current.actions.reset;
    toggle = result.current.actions.toggle;
    spy = jest.spyOn(result.current.actions, "toggle");

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
    renderCart(open);

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
});
