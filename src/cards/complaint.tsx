import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";

function Complain() {
  return (
    <>
      <Heading as="h1" size="md">
        Chief complaints
      </Heading>
      <FormControl p={5}>
        <FormLabel color="black">
          Please Describe Your current problem!
        </FormLabel>
        <Input type="text" color="black" />
      </FormControl>
    </>
  );
}

export default Complain;
