import React from "react";
import { Heading } from "@chakra-ui/react";

function NameandPhoneno() {
  return (
    <>
      <Heading
        as="h1"
        size="lg"
        color="black"
        justifyContent="center"
        display="flex"
      >
        Thank you! 👍
      </Heading>

      <Heading
        size="md"
        color="teal"
        justifyContent="center"
        display="flex"
        p={10}
      >
        Our Team will call you to confirm the Slot
      </Heading>
    </>
  );
}

export default NameandPhoneno;
