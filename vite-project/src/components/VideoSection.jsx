import { AspectRatio, Box, Container } from "@chakra-ui/react";

const VideoSection = () => {
    return (
       <Container maxW={"container.xl"} mb={"10"}>
        <AspectRatio ratio={16 / 9}>
        <Box as="iframe" title="YouTube video" src="https://www.youtube.com/embed/LL68s9Dg1p8?si=C9ZucFQtG3edugqJ" allowFullScreen />
      </AspectRatio>
       </Container>

        // <Flex justifyContent={"center"} mt={"10"} mb={"10"}>
        //     <Box as="iframe" w={"60%"} h={"500px"} allowFullScreen src="https://www.youtube.com/embed/LL68s9Dg1p8?si=C9ZucFQtG3edugqJ">
        //     </Box>
        // </Flex>
    );
};

export default VideoSection;
// direction={{ base: 'column', md: 'row' }}