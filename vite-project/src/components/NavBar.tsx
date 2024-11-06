import { SetStateAction, useEffect, useState } from "react";
import { Text, HStack, Image, Box, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/go-logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

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
  }, [location.pathname]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //     navigate("login");
  //   } catch (err: any) {
  //     console.log("error logging out", err);
  //   }
  // };

  return (
    <Flex
      as="nav"
      position="fixed"
      direction="row"
      align="center"
      bg = "rgba(10, 10, 10, .7)"
      // bg="linear-gradient(135deg, rgba(10, 10, 10, .7), rgba(20, 20, 20, .7))"
      borderBottom={"1px solid rgba(200,200,200,0.5)"}
      p={0}
      w="100vw"
      h="5vh"
      minHeight="24px"
      zIndex={100}
      justifyContent="space-between"
      style={{
        backdropFilter: "blur(10px)", // Frosted glass effect
        WebkitBackdropFilter: "blur(10px)",
      }}
      fontFamily={"sans-serif"}
    >
      {/* Logo */}
      <Box 
        height="100%" 
        p={0} 
        display="flex" 
        alignItems="center"
        mx={3}
      >
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Image
            src={logo}
            height="3vh" // Fixed height relative to navbar
            width="auto" // Automatically adjust width to maintain aspect ratio
            maxWidth="120px" // Prevents horizontal resizing beyond this width
            objectFit="contain" // Ensures the image fits within the specified height
            p={0}
            m={0}
          />
        </Link>
      </Box>

      {/* Links */}
      <HStack spacing={{ base: "1rem", md: "2rem" }}>
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "home" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Home
            </Text>
          </HStack>
        </Link>
        <Link to="/images" onClick={() => handleLinkClick("images")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "images" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Images
            </Text>
          </HStack>
        </Link>
        <Link to="/timetable" onClick={() => handleLinkClick("timetable")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "timetable" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Events
            </Text>
          </HStack>
        </Link>
        <Link to="/contacts" onClick={() => handleLinkClick("contacts")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "contacts" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Contacts
            </Text>
          </HStack>
        </Link>

        {
          <a href="/playGo" onClick={() => handleLinkClick("playGo")}>
            <HStack>
              <Text
                fontWeight="bold"
                fontSize={{ base: "1.5rem", md: "2rem" }}
                fontFamily="Inter, sans-serif"
                textDecoration={activeLink === "playGo" ? "underline" : "none"}
                color="#e8e6e3"
              >
                Play Go
              </Text>
            </HStack>
          </a>
        }
      </HStack>
      <HStack></HStack>
    </Flex>
  );
};

export default NavBar;
