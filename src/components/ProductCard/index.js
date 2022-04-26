import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const ProductCard = () => {
  const urlImage =
    "https://cdn.shopify.com/s/files/1/0540/3036/8945/products/Relogio_Rolex_Submariner_Blue1M@2x.jpg";

  return (
    <Flex
      flexDirection="column"
      backgroundColor="gray.50"
      padding={5}
      borderRadius={4}
    >
      <Image src={urlImage} alt="Rolex" width="250px" height="250px" />
      <Text fontSize="lg" fontWeight="500" marginTop="10px">
        Nome do Produto
      </Text>
      <Text color="#78C752" fontWeight="600">
        $999
      </Text>
    </Flex>
  );
};
