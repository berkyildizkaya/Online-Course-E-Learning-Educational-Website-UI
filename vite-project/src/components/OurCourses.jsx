import { Box, Button, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import OurCoursesCard from "./OurCoursesCard";
const OurCourses = () => {
    const CoursesData = [
        {
            imageSrc: "Image1.png",
            duration: "4 Weeks",
            level: "Beginner",
            instructor: "By John Smith",
            title: "Web Design Fundamentals",
            description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        },
        {
            imageSrc: "Image2.png",
            duration: "6 Weeks",
            level: "Intermediate",
            instructor: "By Emily Johnson",
            title: "UI/UX Design",
            description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        },
        {
            imageSrc: "Image3.png",
            duration: "8 Weeks",
            level: "Intermediate",
            instructor: "By David Brown",
            title: "Mobile App Development",
            description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        },
        {
            imageSrc: "Image4.png",
            duration: "10 Weeks",
            level: "Beginner",
            instructor: "By Sarah Thompson",
            title: "Graphic Design for Beginners",
            description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        },
        {
            imageSrc: "Image5.png",
            duration: "10 Weeks",
            level: "Intermediate",
            instructor: "By Michael Adams",
            title: "Front-End Web Development",
            description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        },
        {
            imageSrc: "Image6.png",
            duration: "6 Weeks",
            level: "Advance",
            instructor: "By Jennifer Wilson",
            title: "Advanced JavaScript",
            description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        },
    ]
    return (
        <>
            <Box mb={10}>
                <Container maxW="container.xl" mb={"10px"} >
                    <Heading as="h2">Our Courses</Heading>
                </Container>
                <Container maxW={"container.xl"}>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
                        <GridItem colSpan={{ base: "auto", md: "2" }}>
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </GridItem>
                        <GridItem colStart={{ base: "0", md: "4" }} colEnd={{ base: "0", md: "6" }} mt={{ base: "10", md: "0" }}>
                            <Button bg={"white"} color={"black"}>View All</Button>
                        </GridItem>
                    </Grid>
                </Container>

                <Container maxW={"container.xl"} mt={"10"}>
                    <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={"5"}>
                        {CoursesData.map((Courses, index) => (
                            <GridItem key={index}>
                                <OurCoursesCard imageSrc={Courses.imageSrc} duration={Courses.duration} level={Courses.level} instructor={Courses.instructor} title={Courses.title} description={Courses.description} />
                            </GridItem>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default OurCourses;