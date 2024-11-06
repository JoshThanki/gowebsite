import { SetStateAction, useEffect, useState } from "react";
import { Text, HStack, Image, Flex } from "@chakra-ui/react";
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
      justifyContent="space-between"

      bg = "rgba(10, 10, 10, .7)"
      borderBottom={"1px solid rgba(200,200,200,0.5)"}
      style={{
        backdropFilter: "blur(10px)", // Frosted glass effect
        WebkitBackdropFilter: "blur(10px)",
      }}

      padding={0}
      width="100vw"
      height="3.5rem"
      zIndex={100}
      
      fontFamily={"sans-serif"}
    >
      {/* Logo */}
      <Image
        src={logo}
        height="100%" // Fixed height relative to navbar
        width="auto" // Automatically adjust width to maintain aspect ratio
        maxWidth="120px" // Prevents horizontal resizing beyond this width
        objectFit="contain" // Ensures the image fits within the specified height
        p={1}
        m={0}
        display={{base: 'none', md: 'block'}}
        position="absolute"
      />
  

      {/* Links */}
      <HStack 
        spacing={{ base: "1rem", md: "2rem" }}
        flexGrow={1} // Allow HStack to take up available space
        justifyContent="center"
      >
        <Link to="/" onClick={() => handleLinkClick("home")}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontFamily="Inter, sans-serif"
            textDecoration={activeLink === "home" ? "underline" : "none"}
            color="#e8e6e3"
          >
            Home
          </Text>
        </Link>
        <Link to="/images" onClick={() => handleLinkClick("images")}>
          <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "images" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Images
            </Text>
        </Link>
        <Link to="/timetable" onClick={() => handleLinkClick("timetable")}>
          <Text
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontFamily="Inter, sans-serif"
              textDecoration={activeLink === "timetable" ? "underline" : "none"}
              color="#e8e6e3"
            >
              Events
            </Text>
        </Link>
        <Link to="/contacts" onClick={() => handleLinkClick("contacts")}>
          <Text
                fontWeight="bold"
                fontSize={{ base: "1.5rem", md: "2rem" }}
                fontFamily="Inter, sans-serif"
                textDecoration={activeLink === "contacts" ? "underline" : "none"}
                color="#e8e6e3"
              >
                Contacts
              </Text>
        </Link>

        {/* {
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
        } */}
      </HStack>
      <HStack></HStack>
    </Flex>
  );
};

export default NavBar;
