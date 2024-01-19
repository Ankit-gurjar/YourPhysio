import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ImageSlider from "./card.tsx";

function Experts() {
  return (
    <Box className="testimonials-section" pt={8}>
      <Heading as="h2" size="xl" textAlign="center" color="teal">
        Meet Our Experts
      </Heading>
      <Text textAlign="center">
        Experience the Benefits of Advanced Technology and Expert Care
      </Text>
      <ImageSlider />
    </Box>
  );
}

export default Experts;
