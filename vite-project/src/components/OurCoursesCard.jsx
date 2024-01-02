// OurCoursesCard.jsx
import { Box, Button, Card, CardBody, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

const OurCoursesCard = ({ imageSrc, duration, level, instructor, title, description, buttonText }) => {
    return (
        <>
            <Card maxW={"xl"}>
                <CardBody>
                    <Image src={`../assets/images/courses/${imageSrc}`} />
                    <Flex gap={"5"} mt={"5"} mb={"5"} wrap={"wrap"} >
                        <Box>
                            <Text fontSize={"md"}> {duration}</Text>
                        </Box>
                        <Box>
                            <Text fontSize={"md"}> {level}</Text>
                        </Box>
                        <Spacer />
                        <Box>
                        <Text as={"b"} fontSize={"md"} align={"right"}> {instructor} </Text>
                        </Box>
                    </Flex>
                    <Flex direction={"column"} wrap={"wrap"} mb={"5"} >
                        <Heading as={"h4"} size={"md"}>{title}</Heading>
                        <Text mt={"3"} fontSize='md'>{description}</Text>
                    </Flex>
                    <Button w={"100%"}>Get it Now</Button>
                </CardBody>
            </Card>
        </>
    );
};

export default OurCoursesCard;
