import { Button, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import BenefitCard from "./BenefitCard";

const benefitData = [
  {
    number: "01",
    title: "Flexible Learning Schedule",
    description: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    number: "02",
    title: "Expert Instruction",
    description: "Learn from industry experts who have hands-on experience in design and development",
  },
  {
    number: "03",
    title: "Diverse Course Offerings",
    description: "Explore a wide range of design and development courses covering various topics",
  },
  {
    number: "04",
    title: "Updated Curriculum",
    description: "Access courses with up-to-date content reflecting the latest trends and industry practices",
  },
  {
    number: "05",
    title: "Practical Projects and Assignments",
    description: "Develop a portfolio showcasing your skills and abilities to potential employers",
  },
  {
    number: "06",
    title: "Interactive Learning Environment",
    description: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding",
  },
  // Diğer benefit verileri buraya eklenebilir
];

const Benefits = () => {
  return (
    <>
      <Container maxW="container.xl" mt={"10"}>
        <Heading as="h2">Benefits</Heading>
      </Container>
      <Container maxW={"container.xl"}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
          <GridItem colSpan={{base:"auto",md:"2"}}>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </GridItem>
          <GridItem colStart={{base:"0",md:"4"}} colEnd={{base:"0",md:"6"}} mt={{base:"10",md:"0"}}>
            <Button>View All</Button>
          </GridItem>
        </Grid>
      </Container>

      <Container maxW={"container.xl"} mt={"10"}>
        <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={"6"} >
          {benefitData.map((benefit, index) => (
            <GridItem key={index}>
              <BenefitCard number={benefit.number} title={benefit.title} description={benefit.description} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Benefits;
