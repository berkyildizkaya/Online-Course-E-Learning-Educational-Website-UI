import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import PricingCardList from "./PricingCardList";

const PricingCard = ({ cardData }) => {
    return (
        <>
            <Card h={"100%"}>
                <CardHeader>
                    <Box
                        flexDirection="column"
                        bg="gray.100"
                        display="flex"
                        alignItems="center"
                        width="100%"
                        p="2"
                        borderRadius={"7"}
                    >
                        <Text>{cardData.planName}</Text>
                    </Box>
                    <Box mt="5" display="flex" justifyContent="center" alignItems="center">
                        <Heading as="h2" size="xl">
                            ${cardData.price}
                        </Heading>
                        <Box ml="2">
                            <Text fontSize="sm">/Month</Text>
                        </Box>
                    </Box>
                </CardHeader>
                <CardBody display="flex" justifyContent="center" alignItems="center" flexDirection={"column"} >
                    <Box mb={"5"}>
                        <Text>Available Features</Text>
                    </Box>
                    <Box>
                        <PricingCardList cardList={cardData.features} />
                    </Box>

                </CardBody>
                <CardFooter >
                    <Button bg={"orange"} w={"100%"}>Get Started</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default PricingCard;
