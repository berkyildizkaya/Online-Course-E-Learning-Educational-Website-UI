import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Spacer, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

const TestimonialsCard = ({description,imageSrc,userName}) => {
  return (
    <Card maxW={"xl"}>
      <CardHeader >
        <Text pt={"5"}>
          {description}
        </Text>
      </CardHeader>
      <CardFooter gap={"15px"} alignItems={"center"}>
        <Box>
          <Avatar src={`../assets/images/testimonials/${imageSrc}`} />
        </Box>
        <Box>
          <Heading fontSize={"md"}>{userName}</Heading>
        </Box>
        <Spacer />
        <Button >Read Full Story</Button>
      </CardFooter>
    </Card>
  );
}

export default TestimonialsCard;