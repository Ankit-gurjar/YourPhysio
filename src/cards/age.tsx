import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";

function AgeCity() {
  return (
    <>
      <Heading as="h1" size="md">
        Help Us underastand You better
      </Heading>
      <FormControl p={5}>
        <FormLabel color="black">Age</FormLabel>
        <Input type="number" color="black" isRequired />
        <FormLabel color="black">City</FormLabel>
        <Input type="text" color="black" />
        <FormLabel color="black">Company</FormLabel>
        <Input type="text" color="black" />
      </FormControl>
    </>
  );
}

export default AgeCity;
