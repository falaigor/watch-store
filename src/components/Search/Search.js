import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Stack data-testid="search" width="500px">
      <InputGroup>
        <Input
          borderColor="#78C752"
          borderWidth={2}
          type="text"
          placeholder="Search"
        />
        <InputRightElement
          backgroundColor="#78C752"
          borderRightRadius={4}
          pointerEvents="none"
        >
          <Search2Icon color="white" />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
