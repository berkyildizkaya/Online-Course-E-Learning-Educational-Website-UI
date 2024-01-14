import { Flex, Text, useTheme } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header = () => {
  const theme = useTheme(); // useTheme fonksiyonunu içeri aktarın

  return (
    <>
      <Flex
        bg={theme.colors.orange[100]} 
        flexDirection="row"
        justifyContent="center"
        alignContent="space-around"
        p="2"
        rounded="10"
        ml="5"
        mr="5"
        mt="3"
      >
        <Text color="white">Free Courses * Sale ends Soon, get it now</Text>
      </Flex>
      <Navbar />
    </>
  );
};

export default Header;
