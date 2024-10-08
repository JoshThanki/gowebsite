import { Box, Flex } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import backgroundImage from '../assets/go_background.jpg';
// import { useEffect } from "react";
// import useAuthUser from "../stores/useAuthUser";

const Layout = () => {
  //   const { authUser, setUser } = useAuthUser();
 // const navigate = useNavigate();
  //   const email = authUser.email;

  //   useEffect(() => {
  //     const loggedInUser = localStorage.getItem("user");
  //     if (loggedInUser) {
  //       //   const foundUser = JSON.parse(loggedInUser);
  //       //   setUser(foundUser["email"]);
  //     } else {
  //       navigate("/login");
  //     }
  //   }, []);

  return (
    <Flex h="100vh" flexDir="column">
      {" "}
      {/* Remove w="100vh" from here */}
      <NavBar />
      <Box flex="1" 
           backgroundImage={backgroundImage}
           backgroundSize="cover" // Ensure the image covers the whole box
           backgroundPosition="center" // Center the image
           backgroundRepeat="no-repeat" // Prevent the image from repeating
           >
        {" "}
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
