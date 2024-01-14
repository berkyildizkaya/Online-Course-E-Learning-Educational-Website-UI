import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Link,
  useMediaQuery,
  IconButton,
  
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
// import Logo from "../assets/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  return (
    <>
      <Flex w={"100%"} px={"0"} py={"5"} align={"center"} mb={"10"} justify={"space-around"}>
        <Box>
          <HStack as={"nav"}>
            <Avatar src={`../assets/images/logo.jpg`} />
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
            <Button bgColor={theme.colors.orange[100]} color={"white"}  _hover={{bg:""}}>Login</Button>
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
