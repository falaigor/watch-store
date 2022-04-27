import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "../miragejs/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
