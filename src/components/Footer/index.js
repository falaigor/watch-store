import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      backgroundColor="gray.100"
      height="60px"
      marginY="10"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="container.xl" justifyContent="space-between">
        <Text>Welcome to our online shop</Text>
        <Text>Location</Text>
      </Flex>
    </Flex>
  );
};
