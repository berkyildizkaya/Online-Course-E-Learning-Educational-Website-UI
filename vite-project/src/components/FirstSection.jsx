import { Avatar, Box, Button, ButtonGroup, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Lightning from "../assets/images/LightningLogo.png";
const FirstSection = () => {
    return (
        <>
            <Flex direction={"row"} p={2} mt={10} justifyContent={"center"} alignContent={"space-around"}>
                <Box>
                    <Image src={Lightning} boxSize={"40px"} mr={3} />
                </Box>
                <Box>
                    <Heading as={"h2"} size={{base:"md",md:"lg"}} color={"orange"}>Unlock</Heading>
                </Box>
                <Box ml={2}>
                    <Heading as={"h2"} size={{base:"md",md:"lg"}}>Your Creative Potential</Heading>
                </Box>
            </Flex>
            <Flex justifyContent={"center"}   mt={"5"} >
                <Box textAlign={"center"}>
                    <Text fontSize={{base:"xl",md:"2xl"}} as={"b"} >with Online Design and Development Courses</Text>
                </Box>
            </Flex>
            <Flex justifyContent={"center"} mt={2}>
                <Box>
                    <Text fontSize='md'>Learn from Industry Experts and Enhance Your Skills</Text>
                </Box>
            </Flex>
            <Flex justifyContent={"center"} wrap={"wrap"}  mt={5}>
                <Box>
                    <ButtonGroup>
                        <Button bgColor="orange" color={"white"} variant={"solid"}  >Explore Courses</Button>
                        <Button>View Pricing</Button>
                    </ButtonGroup>
                </Box>
            </Flex>
        </>
    )
}
export default FirstSection;

