import { useState } from "react";
import { Button, Flex, HStack, Text, Wrap } from "@chakra-ui/react";
import Image from "next/image";

export const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <Flex data-testid="cart-item" justifyContent="space-between" marginY={5}>
      <Flex>
        <Image
          data-testid="image"
          src={product.image}
          alt={product.title}
          width="100px"
          height="100px"
        />
        <Wrap marginLeft={2}>
          <Text>{product.title}</Text>
          <HStack maxW="320px">
            <Button
              minWidth="20px"
              height="20px"
              padding={1}
              onClick={() => decrease()}
            >
              +
            </Button>
            <Text data-testid="quantity">{quantity}</Text>
            <Button
              minWidth="20px"
              height="20px"
              padding={1}
              onClick={() => increase()}
            >
              -
            </Button>
          </HStack>
        </Wrap>
      </Flex>
      <Text>${product.price}</Text>
    </Flex>
  );
};
