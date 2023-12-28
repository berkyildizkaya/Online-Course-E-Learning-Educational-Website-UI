import { Box, Flex, HStack, Heading,Text } from "@chakra-ui/react";

const Courses = () => {
  return (
    <>
      <Flex w={"100%"} px={"0"} py={"10"} align={"center"}  justify={"space-around"}>
        <Box>
            <Heading as='h3' size='lg'>About Skillbridge</Heading>
        </Box>
        <Box maxW={"md"}>
        <Text fontSize={"md"}>
        Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </Text>
        </Box>
      </Flex>
    </>
  );
};
export default Courses;
