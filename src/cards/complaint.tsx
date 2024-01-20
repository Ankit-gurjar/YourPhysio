import { FormLabel, Heading, Textarea } from "@chakra-ui/react";
import React from "react";

type UserData = {
  complain: string;
};
type UserFormPropes = UserData & {
  updatefield: (fields: Partial<UserData>) => void;
};

function Complain({ complain, updatefield }: UserFormPropes) {
  return (
    <>
      <Heading as="h1" size="md">
        Chief complaints
      </Heading>

      <FormLabel color="black">Please Describe Your current problem!</FormLabel>
      <Textarea
        minH="30vh"
        color="black"
        value={complain}
        onChange={(e) => {
          updatefield({ complain: e.target.value });
        }}
      />
    </>
  );
}

export default Complain;
