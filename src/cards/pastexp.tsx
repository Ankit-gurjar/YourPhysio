import React from "react";

import { Heading, FormLabel, Textarea } from "@chakra-ui/react";

type UserData = {
  pastexp: string;
};
type UserFormPropes = UserData & {
  updatefield: (fields: Partial<UserData>) => void;
};

function PastExp({ pastexp, updatefield }: UserFormPropes) {
  return (
    <>
      <Heading as="h1" size="md" color="black">
        Help us choose the right physio for you
      </Heading>
      <FormLabel color="black"> Any Past Experiences</FormLabel>
      <Textarea
        minH="28vh"
        color="black"
        value={pastexp}
        onChange={(e) => {
          updatefield({ pastexp: e.target.value });
        }}
      />
    </>
  );
}

export default PastExp;
