import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  DrawerBody,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { CartItem } from "../CartItem/CartItem";

export const Cart = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>You Cart</DrawerHeader>
        <Divider />

        <DrawerBody>
          <CartItem />

          <InputGroup size="md">
            <Input pr="4.5rem" type="text" placeholder="Add promocode" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                backgroundColor="#78C752"
                onClick={() => console.log("teste")}
              >
                Apply
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            marginTop={4}
            width="100%"
            backgroundColor="#78C752"
            onClick={() => console.log("teste")}
          >
            Checkout
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
