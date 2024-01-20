import React from "react";

import { Heading, Text, FormLabel, Input } from "@chakra-ui/react";

type UserData = {
  name: string;
  mobile_no: string;
};
type UserFormPropes = UserData & {
  updatefield: (fields: Partial<UserData>) => void;
};

function NameandPhoneno({ name, mobile_no, updatefield }: UserFormPropes) {
  return (
    <>
      <Heading as="h1" size="lg" color="black">
        Book an Appointment
      </Heading>
      <Text color="#5943bc">
        60+ Expert Physiotherapists for 200+ Conditions
      </Text>

      <FormLabel color="black">Name</FormLabel>
      <Input
        required
        type="text"
        value={name}
        onChange={(e) => {
          updatefield({ name: e.target.value });
        }}
        color="black"
      />
      <FormLabel color="black">Mobile Number</FormLabel>
      <Input
        color="black"
        value={mobile_no}
        onChange={(e) => {
          updatefield({ mobile_no: e.target.value });
        }}
      ></Input>
    </>
  );
}

export default NameandPhoneno;
