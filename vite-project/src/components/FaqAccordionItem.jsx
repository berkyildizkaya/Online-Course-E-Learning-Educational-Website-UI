import { AccordionButton, AccordionItem, AccordionPanel, Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";
const FaqAccordionItem = ({ isExpanded, onToggle, title, description }) => {
    return (
        <>
            <AccordionItem p={"5"}>
                {({ isExpanded }) => (
                    <>
                        <Flex>
                            <Box  as="span" flex='1' textAlign='left'>
                                {title}
                            </Box>
                            <Box>
                                <IconButton size={"sm"} colorScheme="yellow" as={AccordionButton}  onClick={onToggle} >
                                    {isExpanded ? (
                                        <FaTimes fontSize='12px' />
                                    ) : (
                                        <FaPlus fontSize='12px' />
                                    )}
                                </IconButton>
                            </Box>
                        </Flex>
                        <AccordionPanel p={0} pt={"3"} >
                            <Flex direction={"column"}>
                                <Box>
                                    {description}
                                </Box>
                                <Box>
                                    <Flex bg={"gray.100"} p={"5"} alignItems={"center"} >
                                        <Text>Enrollment Process for different Courses</Text>
                                        <IconButton as={"span"} flex={"1"} justifyContent={"flex-end"} icon={<FaArrowRight />} />

                                    </Flex>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </>
    )
}
export default FaqAccordionItem;
