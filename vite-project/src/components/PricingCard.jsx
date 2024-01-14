import { Box,  Card, CardBody, CardFooter, CardHeader,  Heading,  Text,useTheme } from "@chakra-ui/react";
import PricingCardList from "./PricingCardList";


const PricingCard = ({ cardData }) => {
    const theme = useTheme();
    return (
        <>
            <Card h={"100%"}>
                <CardHeader>
                    <Box
                        flexDirection="column"
                        bg={theme.colors.orange[95]}
                        display="flex"
                        alignItems="center"
                        width="100%"
                        p="2"
                        borderRadius={"7"}
                    >
                        <Text as="b">{cardData.planName}</Text>
                    </Box>
                    <Box mt="5" display="flex" justifyContent="center" alignItems="baseline">
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
                <CardFooter  flex={"1"} justify={"center"} borderRadius={["0,0,8,8"]} roundedBottom={"lg"}  bg={theme.colors.orange[50]} w={"100%"} color={"white"} >
                    Get Started
                </CardFooter>
            </Card>
        </>
    )
}

export default PricingCard;
