import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  DrawerBody,
  Button,
  Text,
} from "@chakra-ui/react";
import { useCartStore } from "../../../store/cart";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ isOpen, onClose }) => {
  const { products } = useCartStore((store) => store.state);
  const { removeAll } = useCartStore((store) => store.actions);

  const hasProducts = products.length > 0;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent data-testid="cart">
        <DrawerCloseButton data-testid="close-button" />
        <DrawerHeader>
          You Cart
          {hasProducts && (
            <Button
              data-testid="button-clear-cart"
              marginLeft={2}
              onClick={() => removeAll()}
            >
              clear cart
            </Button>
          )}
        </DrawerHeader>
        <Divider />

        <DrawerBody>
          {!hasProducts && <Text>There are not items in the cart</Text>}

          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}

          {hasProducts && (
            <>
              <Button
                marginTop={4}
                width="100%"
                backgroundColor="#78C752"
                // onClick={() => console.log("teste")}
              >
                Checkout
              </Button>
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
