import React, { FormEvent } from "react";
import { Box, Button, FormControl } from "@chakra-ui/react";
import { useMultistepForm } from "../custom/useMultistepform.ts";
import NameandPhoneno from "../cards/nameandphone.tsx";
import AgeCity from "../cards/age.tsx";
import Complain from "../cards/complaint.tsx";

function Hero() {
  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } =
    useMultistepForm([<NameandPhoneno />, <AgeCity />, <Complain />]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    next();
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
        minH="50vh"
        minW="50vh"
      >
        <FormControl onSubmit={onSubmit}>
          <Box
            display="flex"
            top="0.5rem"
            right="0.5rem"
            justifyContent="flex-end"
          >
            {currentStepIdx + 1}/{steps.length}
          </Box>
          {step}
          <Box
            display="flex"
            justifyContent="flex-end"
            gap="0.5rem"
            marginTop="1rem"
          >
            {!isFirstStep && <Button onClick={back}>Back</Button>}
            <Button colorScheme="teal">
              {isLastStep ? "Submit" : "Continue"}
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Hero;
