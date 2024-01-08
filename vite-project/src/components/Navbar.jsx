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
  Link,
  useMediaQuery,
  IconButton
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Flex w={"100%"} px={"0"} py={"5"} align={"center"} mb={"10"} justify={"space-around"}>
        <Box>
          <HStack as={"nav"}>
            <Avatar src={Logo} />
            {!isMobile && (
              <>
                <Link><Button variant={"nav"}>Home</Button></Link>
                <Link><Button variant={"nav"}>Courses</Button></Link>
                <Link><Button variant={"nav"}>About Us</Button></Link>
                <Link><Button variant={"nav"}>Pricing</Button></Link>
                <Link><Button variant={"nav"}>Contact</Button></Link>
              </>
            )}
          </HStack>
        </Box>
        <Box>
          <ButtonGroup>
            <Button>Sign Up</Button>
            <Button bgColor="orange" color={"white"}>Login</Button>
            {
              isMobile && (
                <>
                <IconButton icon={<RxHamburgerMenu />} > </IconButton>
                </>
              )
            }
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
};
export default Navbar;
