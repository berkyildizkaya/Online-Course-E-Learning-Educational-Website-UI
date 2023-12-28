import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Text,
  Heading,
  HStack,
  Link
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.jpg";
const Navbar = () => {
  return (
    <>
      <Flex w={"100%"} px={"0"} py={"5"} align={"center"} justify={"space-around"}>
        <Box>
            <HStack as={"nav"}>
            <Avatar src={Logo}/> 
            <Link><Button variant={"nav"}>Home</Button></Link>
            <Link><Button variant={"nav"}>Courses</Button></Link>
            <Link><Button variant={"nav"}>About Us</Button></Link>
            <Link><Button variant={"nav"}>Pricing</Button></Link>
            <Link><Button variant={"nav"}>Contact</Button></Link>
            </HStack>
        </Box>
        <Box>
        <ButtonGroup>
            <Button>Sign Up</Button>
            <Button bgColor="orange" color={"white"}>Login</Button>
        </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
};
export default Navbar;
