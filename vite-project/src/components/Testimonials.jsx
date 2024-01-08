import { Container, Grid, GridItem, Heading, Button, Box } from "@chakra-ui/react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    const TestimonialsData = [
        {
            description: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            imageSrc: "User1.png",
            userName: "Sarah L",
        },
        {
            description: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
            imageSrc: "User2.png",
            userName: "Jason M",
        },
        {
            description: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
            imageSrc: "User3.png",
            userName: "Emily R",
        },
        {
            description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
            imageSrc: "User4.png",
            userName: "Michael K",
        },
    ]

    return (
        <>
            <Box mb={"10"}>
                <Container maxW="container.xl" mb={"3"}>
                    <Heading as="h2">Our Testimonials</Heading>
                </Container>
                <Container maxW={"container.xl"}>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
                        <GridItem colSpan={{ base: "auto", md: "2" }}>
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </GridItem>
                        <GridItem colStart={{ base: "0", md: "4" }} colEnd={{ base: "0", md: "6" }} mt={{ base: "10", md: "0" }}>
                            <Button>View All</Button>
                        </GridItem>
                    </Grid>
                </Container>

                <Container maxW={"container.xl"} mt={"10"}>
                    <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} rowGap={"5"} >
                        {TestimonialsData.map((Testimonials, index) => (
                            <GridItem key={index}>
                                <TestimonialsCard description={Testimonials.description} imageSrc={Testimonials.imageSrc} userName={Testimonials.userName} />
                            </GridItem>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Testimonials;
