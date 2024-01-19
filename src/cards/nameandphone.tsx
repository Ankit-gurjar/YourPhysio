import React from "react";

import { Heading, Text, FormControl, FormLabel, Input } from "@chakra-ui/react";

function NameandPhoneno() {
  return (
    <>
      <Heading as="h1" size="lg" color="black">
        Book an Appointment
      </Heading>
      <Text color="black">60+ Expert Physiotherapists for 200+ Conditions</Text>
      <FormControl p={5}>
        <FormLabel color="black">Name</FormLabel>
        <Input type="text" color="black" />
        <FormLabel color="black">Mobile Number</FormLabel>
        <Input type="number" color="black" />
      </FormControl>
    </>
  );
}

export default NameandPhoneno;
