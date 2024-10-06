import { SetStateAction, useEffect, useState } from "react";
import { Text, VStack, HStack, Image, Box, Flex, Button } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState(""); // State to manage active link
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle click on a link and set active link
  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
      handleLinkClick("home");
    } else {
      handleLinkClick(location.pathname.substring(1));
    }
  }, [location.pathname]); // Added location.pathname as a dependency for useEffect

  return (
    <Flex>
    <Flex
      direction="row" // Change to row for horizontal layout
      align="center"
      bg="theme.colors.darkBrown"
      p={4}
      w="100vw" // Full width
      h="5vh" // Adjust height for a thinner navbar
      justifyContent="space-between"
   //   rounded={5}
    >
      <Box>
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Image src={logo} />
        </Link>
      </Box>

      <HStack spacing="30px">
        {" "}
        {/* Adjusted spacing for horizontal layout */}
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "home" ? "secondary.100" : "secondary.50"} // Apply color based on active link
            >
              Home
            </Text>
          </HStack>
        </Link>

        <Link to="/history" onClick={() => handleLinkClick("history")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "history" ? "secondary.100" : "secondary.50"} // Apply color based on active link
            >
              History
            </Text>
          </HStack>
        </Link>
        <Link to="/rules" onClick={() => handleLinkClick("rules")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "rules" ? "secondary.100" : "secondary.50"} // Apply color based on active link
            >
              Rules
            </Text>
          </HStack>
        </Link>
        <Link to="/playgo" onClick={() => handleLinkClick("playgo")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "playgo" ? "secondary.100" : "secondary.50"} // Apply color based on active link
            >
              Play Go
            </Text>
          </HStack>
        </Link>
        <Link to="/timetable" onClick={() => handleLinkClick("timetable")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "timetable" ? "secondary.100" : "secondary.50"} // Apply color based on active link
            >
              Timetable
            </Text>
          </HStack>
        </Link>
      </HStack>

      <HStack>
        <Button onClick={() => navigate("/login")}>Log in

        </Button>
      </HStack>
    </Flex>
    </Flex>
  );
};

export default NavBar;
