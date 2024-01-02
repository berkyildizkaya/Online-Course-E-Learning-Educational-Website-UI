import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

const BenefitCard = ({ number, title, description }) => {
  return (
    <Card maxW={"lg"}>
      <CardHeader>
        <Flex justify={"flex-end"}>
          <Heading as={"h2"}>
            {number}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction={"column"} wrap={"wrap"} >
          <Heading as={"h4"} size={"md"}>{title}</Heading>
          <Text mt={"3"}>{description}</Text>
        </Flex>
      </CardBody>
      <CardFooter justify="flex-end">
        <IconButton size={"lg"} color={"orange"} icon={<GoArrowUpRight />} />
      </CardFooter>
    </Card>
  );
}

export default BenefitCard;
