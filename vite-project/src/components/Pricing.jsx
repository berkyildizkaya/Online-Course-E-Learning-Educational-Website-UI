import { Box, Button, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import SwitchButton from "./SwitchButton";
import PricingCard from "./PricingCard";

const Pricing = () => {
    const pricingData = [
        {
            planName: "FREE",
            price: "0",
            features: [
                {
                    key: "1",
                    icon: "Check",
                    text: "Access to selected free courses"
                },
                {
                    key: "2",
                    icon: "Check",
                    text: "Limited course materials and resources."
                },
                {
                    key: "3",
                    icon: "Check",
                    text: "Basic community support."
                },
                {
                    key: "4",
                    icon: "Check",
                    text: "No certification upon completion."
                },
                {
                    key: "5",
                    icon: "Check",
                    text: "Ad-supported platform."
                },
                {
                    key: "6",
                    icon: "Times",
                    text: "Access to exclusive Pro Plan community forums."
                },
                {
                    key: "7",
                    icon: "Times",
                    text: "Early access to new courses and updates. "
                },
            ]
        },
        {
            planName: "PREMIUM",
            price: "79",
            features: [
                {
                    key: "1",
                    icon: "Check",
                    text: "Unlimited access to all courses."
                },
                {
                    key: "2",
                    icon: "Check",
                    text: "Unlimited course materials and resources."
                },
                {
                    key: "3",
                    icon: "Check",
                    text: "Priority support from instructors."
                },
                {
                    key: "4",
                    icon: "Check",
                    text: "Course completion certificates."
                },
                {
                    key: "5",
                    icon: "Check",
                    text: "Ad-free experience."
                },
                {
                    key: "6",
                    icon: "Check",
                    text: "Access to exclusive Pro Plan community forums."
                },
                {
                    key: "7",
                    icon: "Check",
                    text: "Early access to new courses and updates."
                },
            ]
        }
    ]


    return (
        <>
            <Box mb={"10"}>
                <Container maxW="container.xl" mb={"3"}>
                    <Heading as="h2">Our Pricing</Heading>
                </Container>
                <Container maxW={"container.xl"} >
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
                        <GridItem colSpan={{ base: "auto", md: "2" }}>
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </GridItem>
                        <GridItem colStart={{ base: "0", md: "4" }} colEnd={{ base: "0", md: "6" }} mt={{ base: "10", md: "0" }}  >
                            
                            <SwitchButton />
                        </GridItem>
                    </Grid>
                </Container>
                <Container maxW={"container.xl"} mt={"10"} >
                    <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} gap={"20px"}>
                        {pricingData.map((Pricing, index) => (
                            <GridItem >
                                <PricingCard cardData={Pricing} key={index} />
                            </GridItem>
                        ))}

                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Pricing;