import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";

export const Search = ({ doSearch }) => {
  const [term, setTerm] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    doSearch(term);
  };

  const inputHandler = (e) => {
    setTerm(e.target.value);
    if (e.target.value == "") doSearch("");
  };

  return (
    <form onSubmit={submitHandler} name="search-form">
      <Stack width="500px">
        <InputGroup>
          <Input
            borderColor="#78C752"
            borderWidth={2}
            placeholder="Search"
            type="search"
            value={term}
            onInput={inputHandler}
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
