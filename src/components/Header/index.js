import { useRef } from "react";
import { Flex, Text, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { Search } from "../Search/Search";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
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

          <Search />

          <Button ref={btnRef} onClick={onOpen} backgroundColor="#fff">
            <FiShoppingCart stroke="gray" fontSize="20px" />
          </Button>
        </Flex>
      </Flex>

      <Cart isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  );
};
