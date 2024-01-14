import { AccordionButton, AccordionItem, AccordionPanel, Box, Flex, IconButton, Spacer, Text,useTheme } from "@chakra-ui/react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";
const FaqAccordionItem = ({ isExpanded, onToggle, title, description }) => {
    const theme = useTheme();
    return (
        <>
            <AccordionItem p={"5"} border={"0"} >
                {({ isExpanded }) => (
                    <>
                        <Flex>
                            <Box  as="span" flex='1' textAlign='left'>
                                {title}
                            </Box>
                            <Box>
                                <IconButton size={"sm"} bg={theme.colors.orange["95"]} as={AccordionButton}  onClick={onToggle} >
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
                                    <Flex bg={"#F7F7F8"} p={"5"} alignItems={"center"} >
                                        <Text>Enrollment Process for different Courses</Text>
                                        <Spacer></Spacer>
                                        <IconButton  bg={"white"}  border={"0px"} borderRadius={"100px"} icon={<FaArrowRight />} />

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
