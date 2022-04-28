import { useRef, useState } from "react";
import { useCartStore } from "../../../store/cart";
import { Flex, Text, Heading, Button } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { Search } from "../Search/Search";

export const Header = ({ doSearch }) => {
  const open = useCartStore((store) => store.state.open);
  const toggle = useCartStore((store) => store.actions.toggle);

  return (
    <>
      <Flex
        data-testid="header"
        backgroundColor="#78C752"
        height="35px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex width="container.xl" justifyContent="space-between">
          <Text>Welcome to our online shop</Text>
          <Text>Location</Text>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center">
        <Flex
          width="container.xl"
          alignItems="center"
          justifyContent="space-between"
          paddingY={10}
        >
          <Heading color="gray.700" fontWeight="300">
            Watch Store
          </Heading>

          <Search doSearch={doSearch} />

          <Button onClick={toggle} backgroundColor="#fff">
            <FiShoppingCart stroke="gray" fontSize="20px" />
          </Button>
        </Flex>
      </Flex>

      <Cart isOpen={open} onClose={toggle} />
    </>
  );
};
