import { SetStateAction, useEffect, useState } from "react";
import { Text, HStack, Image, Box, Flex, Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import logo from "../assets/go-logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("login");
    } catch (err: any) {
      console.log("error logging out", err);
    }
  };

  return (
    <Flex
      as="nav"
      position="fixed"
      direction="row"
      align="center"
      bg="gray.900"
      p={0} // Optional: Remove padding to keep the height consistent
      w="100vw"
      h="5vh" // Fixed height for navbar
      zIndex={100}
      justifyContent="space-between"
    >
      {/* Logo */}
      <Box height="100%" p={0} display="flex" alignItems="center" ml={5}>
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Image
            src={logo}
            height="4.5vh" // Fixed height relative to navbar
            width="auto" // Automatically adjust width to maintain aspect ratio
            maxWidth="120px" // Prevents horizontal resizing beyond this width
            objectFit="contain" // Ensures the image fits within the specified height
            p={0}
            m={0}
          />
        </Link>
      </Box>

      {/* Links */}
      <HStack spacing="2rem">
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="1.25rem" // Use rem for consistent scaling
              fontFamily="Inter, sans-serif"
              color={activeLink === "home" ? "gray.500" : "gray.300"}
            >
              Home
            </Text>
          </HStack>
        </Link>
        <Link to="/images" onClick={() => handleLinkClick("images")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="1.25rem"
              fontFamily="Inter, sans-serif"
              color={activeLink === "images" ? "gray.500" : "gray.300"}
            >
              Images
            </Text>
          </HStack>
        </Link>
        <Link to="/timetable" onClick={() => handleLinkClick("timetable")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="1.25rem"
              fontFamily="Inter, sans-serif"
              color={activeLink === "timetable" ? "gray.500" : "gray.300"}
            >
              Events
            </Text>
          </HStack>
        </Link>
        <Link to="/contacts" onClick={() => handleLinkClick("contacts")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="1.25rem"
              fontFamily="Inter, sans-serif"
              color={activeLink === "contacts" ? "gray.500" : "gray.300"}
            >
              Contacts
            </Text>
          </HStack>
        </Link>

        {user && (
          <Link to="/playGo" onClick={() => handleLinkClick("playGo")}>
            <HStack>
              <Text
                fontWeight="bold"
                fontSize="20px"
                fontFamily="Inter, sans-serif"
                color={activeLink === "playGo" ? "gray.500" : "gray.300"}
              >
                Play Go
              </Text>
            </HStack>
          </Link>
        )}
      </HStack>

      {/* Authentication Buttons */}
      <HStack>
        {user ? (
          <Button
            onClick={handleLogout}
            colorScheme="red"
            variant="ghost"
            textColor="white"
            _hover={{ bg: "red.600", color: "white" }}
            fontSize="1rem"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            textColor="gray.300"
            variant="ghost"
            _hover={{ bg: "red.600", color: "white" }}
            fontSize="1rem"
          >
            Log in
          </Button>
        )}
      </HStack>
    </Flex>
  );
};

export default NavBar;
