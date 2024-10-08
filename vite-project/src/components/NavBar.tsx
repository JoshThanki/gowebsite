import { SetStateAction, useEffect, useState } from "react";
import { Text, HStack, Image, Box, Flex, Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import logo from "../assets/react.svg";

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
    } catch(err: any){
      console.log("error logging out", err);
    }
  }

  return (
    <Flex>
    <Flex
      direction="row" 
      align="center"
      bg="gray.900"
      p={4}
      w="100vw" 
      h="5vh" 
      justifyContent="space-between"
    >
      <Box>
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Image src={logo} />
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

        <Link to="/history" onClick={() => handleLinkClick("history")}>
          <HStack>
            <Text
              fontWeight="bold"
              fontSize="20px"
              fontFamily="Inter, sans-serif"
              color={activeLink === "history" ? "gray.500" : "gray.300"} 
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
              color={activeLink === "rules" ? "gray.500" : "gray.300"} 
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
              color={activeLink === "playgo" ? "gray.500" : "gray.300"} 
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
              color={activeLink === "timetable" ? "gray.500" : "gray.300"} 
            >
              Timetable
            </Text>
          </HStack>
        </Link>
      </HStack>

      <HStack>
      {user ? (
        <>
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
          {/* <Text color="white">Logged in</Text> */}
        </>
      ) : (
        <Button onClick={() => navigate("/login")} colorScheme="blue">
          Log in
        </Button>
      )}
    </HStack>
    </Flex>
    </Flex>
  );
};

export default NavBar;
