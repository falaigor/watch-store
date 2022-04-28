import { Button, Flex, HStack, Text, Wrap } from "@chakra-ui/react";
import { useCartStore } from "../../../store/cart";

export const CartItem = ({ product }) => {
  const { remove, increase, decrease } = useCartStore((store) => store.actions);

  return (
    <Flex data-testid="cart-item" marginY={5} flexDirection="column">
      <Flex justifyContent="space-between">
        <Flex>
          <img
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
                data-testid="button-decrease"
                minWidth="20px"
                height="20px"
                padding={1}
                onClick={() => decrease(product)}
              >
                -
              </Button>
              <Text data-testid="quantity">{product.quantity}</Text>
              <Button
                data-testid="button-increase"
                minWidth="20px"
                height="20px"
                padding={1}
                onClick={() => increase(product)}
              >
                +
              </Button>
            </HStack>
          </Wrap>
        </Flex>
        <Text>${product.price}</Text>
      </Flex>

      <Button
        data-testid="button-remove"
        minWidth="20px"
        height="20px"
        marginTop={2}
        onClick={() => remove(product)}
      >
        Remove product
      </Button>
    </Flex>
  );
};
