import {  Box, Button, ButtonGroup,  Flex, Heading, Image, Text,useTheme } from "@chakra-ui/react";
import Lightning from "../assets/images/LightningLogo.png";
const HeroSection = () => {
    const theme = useTheme();
    return (
        <>
            <Box mb={20}>
                <Flex direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Box p={"2"} bgColor={"white"}>
                        <Image src={Lightning} boxSize={"40px"} mr={2}/>
                    </Box>
                    <Box bgColor={"white"} p={2}>
                        <Heading as={"h2"} size={{ base: "md", md: "lg" }}>
                            <Box as="span" color={theme.colors.orange[100]}>
                                Unlock
                            </Box>{" "}
                            Your Creative Potential
                        </Heading>
                    </Box>
                </Flex>

                <Flex justifyContent={"center"} mt={"5"} >
                    <Box textAlign={"center"}>
                        <Text fontSize={{ base: "xl", md: "2xl" }} as={"b"} >with Online Design and Development Courses</Text>
                    </Box>
                </Flex>
                <Flex justifyContent={"center"} mt={2}>
                    <Box>
                        <Text fontSize='md'>Learn from Industry Experts and Enhance Your Skills</Text>
                    </Box>
                </Flex>
                <Flex justifyContent={"center"} wrap={"wrap"} mt={5}>
                    <Box>
                        <ButtonGroup>
                            <Button bgColor={theme.colors.orange[100]} color={"white"} _hover={{bg:""}} >Explore Courses</Button>
                            <Button>View Pricing</Button>
                        </ButtonGroup>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default HeroSection;

