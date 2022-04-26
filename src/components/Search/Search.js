import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";

export const Search = ({ doSearch }) => {
  const [term, setTerm] = useState("");

  return (
    <form onSubmit={() => doSearch(term)} name="search-form">
      <Stack width="500px">
        <InputGroup>
          <Input
            borderColor="#78C752"
            borderWidth={2}
            placeholder="Search"
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
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
    </form>
  );
};
