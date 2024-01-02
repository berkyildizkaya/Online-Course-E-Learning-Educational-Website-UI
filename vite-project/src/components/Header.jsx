import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header = () =>{
return(
    <>
    <Flex bg={"orange"} flexDirection={"row"} justifyContent={"center"} alignContent={"space-around"} p={"2"} rounded={"10"} ml={"5"} mr={"5"} mt={"3"} >
    <Text color={"white"}>Free Courses * Sale ends Soon, get it now </Text>
    </Flex>
    <Navbar/>
    </>
)
}
export default Header;