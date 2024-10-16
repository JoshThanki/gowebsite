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
    <Flex>
      <Flex
        position="fixed"
        direction="row"
        align="center"
        bg="gray.900"
        p={4}
        w="100vw"
        h="5vh"
        zIndex={100}
        justifyContent="space-between"
      >
        <Box height="250%" p={0}>
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            style={{ padding: 0, margin: 0 }}
          >
            <Image
              src={logo}
              objectFit="contain"
              height="100%"
              width="auto"
              p={0}
              m={0}
              display="block"
            />
          </Link>
        </Box>

        <HStack spacing="30px">
          {" "}
          <Link to="/" onClick={() => handleLinkClick("home")}>
            <HStack>
              <Text
                fontWeight="bold"
                fontSize="20px"
                fontFamily="Inter, sans-serif"
                color={activeLink === "home" ? "gray.500" : "gray.300"}
              >
                Home
              </Text>
            </HStack>
          </Link>
          {/* <Link to="/playgo" onClick={() => handleLinkClick("playgo")}>
            <HStack>
              <Text
                fontWeight="bold"
                fontSize="20px"
                fontFamily="Inter, sans-serif"
                color={activeLink === "playgo" ? "gray.500" : "gray.300"}
              >
                Play Go
              </Text>
            </HStack>
          </Link> */}
          <Link to="/images" onClick={() => handleLinkClick("images")}>
            <HStack>
              <Text
                fontWeight="bold"
                fontSize="20px"
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
                fontSize="20px"
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
                fontSize="20px"
                fontFamily="Inter, sans-serif"
                color={activeLink === "contacts" ? "gray.500" : "gray.300"}
              >
                Contacts
              </Text>
            </HStack>
          </Link>
        </HStack>

        <HStack>
          {user ? (
            <>
              <Button
                onClick={handleLogout}
                colorScheme="red"
                variant="ghost"
                textColor="white"
                _hover={{ bg: "red.600", color: "white" }}
              >
                Logout
              </Button>
              {/* <Text color="white">Logged in</Text> */}
            </>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              textColor="gray.300"
              variant="ghost"
              _hover={{ bg: "red.600", color: "white" }}
            >
              Log in
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
