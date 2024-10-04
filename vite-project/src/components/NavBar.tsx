import { SetStateAction, useEffect, useState } from "react";
import { Text, VStack, HStack, Image, Box, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/react.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(""); // State to manage active link
  const location = useLocation();

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
    <Flex
      direction="row" // Change to row for horizontal layout
      align="center"
      bg="#1E90FF" // Blue background
      color="white"
      p={4}
      w="100vw" // Full width
      h="10vh" // Adjust height for a thinner navbar
      justifyContent="space-between"
      rounded={5}
    >
      <Box>
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Image src={logo} />
        </Link>
      </Box>

      <HStack spacing="30px">
        {" "}
        {/* Adjusted spacing for horizontal layout */}
        <Link to="/history" onClick={() => handleLinkClick("history")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="DM Sans"
              color={activeLink === "history" ? "black" : "white"} // Apply color based on active link
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
              fontFamily="DM Sans"
              color={activeLink === "rules" ? "black" : "white"} // Apply color based on active link
            >
              Rules
            </Text>
          </HStack>
        </Link>
        <Link to="/Play Go" onClick={() => handleLinkClick("Play Go")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="DM Sans"
              color={activeLink === "Play Go" ? "black" : "white"} // Apply color based on active link
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
              fontFamily="DM Sans"
              color={activeLink === "timetable" ? "black" : "white"} // Apply color based on active link
            >
              Timetable
            </Text>
          </HStack>
        </Link>
      </HStack>
      <HStack />
    </Flex>
  );
};

export default NavBar;
