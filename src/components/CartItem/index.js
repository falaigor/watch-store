import {
  Button,
  Flex,
  HStack,
  Input,
  Text,
  useNumberInput,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";

export const CartItem = () => {
  const urlImage =
    "https://cdn.shopify.com/s/files/1/0540/3036/8945/products/Relogio_Rolex_Submariner_Blue1M@2x.jpg";

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex justifyContent="space-between" marginY={5}>
      <Flex>
        <Image src={urlImage} alt="Rolex" width="100px" height="100px" />
        <Wrap marginLeft={2}>
          <Text>Cart Item</Text>
          <HStack maxW="320px">
            <Button minWidth="20px" height="20px" padding={1} {...inc}>
              +
            </Button>
            <Input border="none" width="20px" paddingInline={0} {...input} />
            <Button minWidth="20px" height="20px" padding={1} {...dec}>
              -
            </Button>
          </HStack>
        </Wrap>
      </Flex>
      <Text>$999</Text>
    </Flex>
  );
};
