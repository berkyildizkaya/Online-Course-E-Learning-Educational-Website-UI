import { Avatar, Box, Container, Flex, Grid, GridItem, Stack, Text, HStack, VStack, Heading, Spacer,IconButton } from "@chakra-ui/react";
import { FaInbox, FaPhoneAlt, FaLocationArrow,FaFacebook,FaTwitter ,FaLinkedin   } from "react-icons/fa";
const Footer = () => {
    return (
        <>

            <Container maxW={"container.xl"}>
                <Grid templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]} >
                    <Stack direction={"column"} gap={"3"} mb={{ base: "10", md: "0" }}>
                        <Avatar src={`../assets/images/logo.jpg`}  />
                        <HStack>
                            <Box>
                                <FaInbox />
                            </Box>
                            <Text>hello@skillbridge.com</Text>
                        </HStack>
                        <HStack>
                            <Box>
                                <FaPhoneAlt />
                            </Box>
                            <Text>+91 91813 23 2309</Text>
                        </HStack>
                        <HStack>
                            <Box>
                                <FaLocationArrow />
                            </Box>
                            <Text>Somewhere in the World</Text>
                        </HStack>

                    </Stack>
                
                    <Stack direction={"row"} wrap={["wrap","nowrap"]} gridColumnGap={"10"} >
                    <Box>
                        <Stack direction={"column"}>
                            <Heading as='h4' size='md'>Home</Heading>
                            <Text>Benefits</Text>
                            <Text>Our Courses</Text>
                            <Text>Our Testimonials</Text>
                            <Text>Our FAQ</Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={"column"} >
                            <Heading as='h4' size='md'>About Us</Heading>
                            <Text>Company</Text>
                            <Text>Achievements</Text>
                            <Text>Our Goals</Text>
                        </Stack>
                    </Box>

                    <Box>
                        <Heading as='h4' size='md'>Social Profiles</Heading>
                        <Stack direction={"row"} >
                        <IconButton  icon={<FaFacebook />} />
                        <IconButton  icon={<FaTwitter />} />
                        <IconButton  icon={<FaLinkedin />} />

                        </Stack>
                    </Box>
                    </Stack>



                    
                </Grid>
            </Container>
            <Text p={5} textAlign={"center"}>© 2023 Skillbridge. All rights reserved.</Text>
        </>
    );
}

export default Footer;
