import React, { useState } from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

import data from "../data.json";

function ImageSlider() {
  let [activeidx, setActiveidx] = useState(0);

  const updatenextidx = () => {
    setActiveidx((activeidx + 1) % data.length);
  };

  const updateprevidx = () => {
    if (activeidx === 0) setActiveidx(data.length - 1);
    else setActiveidx(--activeidx);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ArrowLeftIcon onClick={updateprevidx} w="5%"></ArrowLeftIcon>
      <SimpleGrid
        spacing={4}
        display="flex"
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        alignContent="center"
      >
        <Card maxW="sm">
          <CardBody>
            <Image src={data[activeidx].image_url} alt="" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data[activeidx].name}</Heading>
              <Text>{data[activeidx].degree}</Text>
              <Text>{data[activeidx].experience} Years of experience</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue" textAlign="center">
              Know More
            </Button>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              src={data[(activeidx + 1) % data.length].image_url}
              alt=""
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {data[(activeidx + 1) % data.length].name}
              </Heading>
              <Text>{data[(activeidx + 1) % data.length].degree}</Text>
              <Text>
                {data[(activeidx + 1) % data.length].experience} Years of
                experience
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue" textAlign="center">
              Know More
            </Button>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              src={data[(activeidx + 2) % data.length].image_url}
              alt=""
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {data[(activeidx + 2) % data.length].name}
              </Heading>
              <Text>{data[(activeidx + 2) % data.length].degree}</Text>
              <Text>
                {data[(activeidx + 2) % data.length].experience} Years of
                experience
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue" textAlign="center">
              Know More
            </Button>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              src={data[(activeidx + 3) % data.length].image_url}
              alt=""
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {data[(activeidx + 3) % data.length].name}
              </Heading>
              <Text>{data[(activeidx + 3) % data.length].degree}</Text>
              <Text>
                {data[(activeidx + 3) % data.length].experience} Years of
                experience
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue" textAlign="center">
              Know More
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <ArrowRightIcon onClick={updatenextidx} w="5%"></ArrowRightIcon>
    </Box>
  );
}

export default ImageSlider;
