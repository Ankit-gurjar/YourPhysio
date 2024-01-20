import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
type UserData = {
  age: string;
  city: string;
  company: string;
};
type UserFormPropes = UserData & {
  updatefield: (fields: Partial<UserData>) => void;
};
function AgeCity({ age, city, company, updatefield }: UserFormPropes) {
  return (
    <>
      <Heading as="h1" size="md">
        Help Us underastand You better
      </Heading>
      <FormControl p={5}>
        <FormLabel color="black">Age</FormLabel>
        <Input
          type="number"
          color="black"
          value={age}
          onChange={(e) => {
            updatefield({ age: e.target.value });
          }}
        />
        <FormLabel color="black">City</FormLabel>
        <Input
          type="text"
          color="black"
          value={city}
          onChange={(e) => {
            updatefield({ city: e.target.value });
          }}
        />
        <FormLabel color="black">Company</FormLabel>
        <Input
          type="text"
          color="black"
          value={company}
          onChange={(e) => {
            updatefield({ company: e.target.value });
          }}
        />
      </FormControl>
    </>
  );
}

export default AgeCity;
