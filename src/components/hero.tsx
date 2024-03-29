import React, { FormEvent, useState } from "react";
import { Box, Button, ButtonGroup, FormControl } from "@chakra-ui/react";
import { useMultistepForm } from "../custom/useMultistepform.ts";
import NameandPhoneno from "../cards/nameandphone.tsx";
import AgeCity from "../cards/age.tsx";
import Complain from "../cards/complaint.tsx";
import PastExp from "../cards/pastexp.tsx";
import ThankYou from "../cards/thankyou.tsx";

type FormData = {
  name: string;
  mobile_no: string;
  age: string;
  city: string;
  company: string;
  complain: string;
  pastexp: string;
};

const INITIAL_DATA = {
  name: "",
  mobile_no: "",
  age: "",
  city: "",
  company: "",
  complain: "",
  pastexp: "",
};

function Hero() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <NameandPhoneno {...data} updatefield={updateFields} />,
      <AgeCity {...data} updatefield={updateFields} />,
      <Complain {...data} updatefield={updateFields} />,
      <PastExp {...data} updatefield={updateFields} />,
      <ThankYou />,
    ]);

  function submitform(e: FormEvent) {
    e.preventDefault();
    if (currentStepIdx === 0) {
      if (!data.name || !data.mobile_no) return alert("Fill details");
      else if (
        (currentStepIdx === 0 && Number(data.mobile_no) < 999999999) ||
        Number(data.mobile_no) > 9999999999
      )
        return alert("Enter Correct mobile no");
    } else if (currentStepIdx === 1) {
      if (!data.age || !data.city || !data.company)
        return alert("Fill details");
      else if (Number(data.age) < 1 || Number(data.age) > 120)
        return alert("Enter Correct Age");
    } else if (currentStepIdx === 2 && !data.complain)
      return alert("Fill details");
    else if (Number(data.age) < 40) next();
    else if (isLastStep) alert("Our Team will call you to confirm a Slot");
    return next();
  }

  return (
    <Box
      className="hero-section"
      display="flex"
      alignItems="center"
      p={10}
      boxShadow="1 1 1 10px red"
    >
      <Box
        p={4}
        border="1px"
        borderColor="gray.500"
        borderRadius="9px"
        backgroundColor="#F2F7F2"
        boxShadow="dark-lg"
        position="relative"
        height="55vh"
        width="50vh"
      >
        <FormControl p={5} isRequired>
          <Box
            display="flex"
            top="0.5rem"
            right="0.5rem"
            justifyContent="flex-end"
          >
            {currentStepIdx + 1}/{steps.length}
          </Box>
          {step}
          <ButtonGroup
            display="flex"
            justifyContent="flex-end"
            gap="0.5rem"
            marginTop="1rem"
          >
            {!isFirstStep && !isLastStep && (
              <Button colorScheme="red" onClick={back}>
                Back
              </Button>
            )}
            {!isLastStep && (
              <Button colorScheme="teal" onClick={submitform}>
                {currentStepIdx === steps.length - 2 ? "Submit" : "Continue"}
              </Button>
            )}
          </ButtonGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Hero;
