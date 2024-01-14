import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Container, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import FaqAccordionItem from "./FaqAccordionItem";

const Faq = () => {
    const FaqData = [
        {
            title: "Can I enroll in multiple courses at once?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            title: "What kind of support can I expect from instructors?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            title: "Can I enroll in multiple courses at once?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            title: "Are the courses self-paced or do they have specific start and end dates?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            title: "Are there any prerequisites for the courses?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            title: "Can I download the course materials for offline access?",
            description: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
    ]

    const [isExpanded, setisExpanded] = useState(false);

    const handleExpandedChange = () => {
        setisExpanded(!isExpanded);
    };

    return (
        <>
            <Container maxW={"container.xl"} mb={"20"} bg={"white"} p={"5"} >
                <Stack direction={{ base: "column", md: "row" }}>
                    <Box p={5}>
                        <Heading fontSize='4xl'>Frequently Asked Questions</Heading>
                        <Text mt={4}>Still have any questions? Contact our Team via support@skillbridge.com</Text>
                        <Button mt={"5"}>See All FAQ's</Button>
                    </Box>
                    <Box p={5} w={"100%"}>
                        <Accordion allowToggle >

                            {FaqData.map((Faq, index) => (
                                <Box m={"2"} border={"1px"}  borderColor={"#F1F1F3"} borderRadius={"12px"}>
                                <FaqAccordionItem isExpanded={isExpanded} onToggle={handleExpandedChange} title={Faq.title} description={Faq.description} key={index} />
                                </Box>
                            ))}
                        </Accordion>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default Faq;
