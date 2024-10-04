import { Box, Flex } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
// import { useEffect } from "react";
// import useAuthUser from "../stores/useAuthUser";

const Layout = () => {
  //   const { authUser, setUser } = useAuthUser();
  const navigate = useNavigate();
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
    <Flex h="100vh">
      {" "}
      {/* Remove w="100vh" from here */}
      <NavBar />
      <Flex flex="1" bg="white" direction="column" padding={5} overflowY="auto">
        {" "}
        {/* Add flex="1" to make content area take remaining space, and add overflowY="auto" to enable vertical scrolling */}
        <Flex direction="row" justifyContent="space-between" marginBottom={3}>
          <Link to={"/"}></Link>
        </Flex>
        <Box flex="1">
          {" "}
          {/* Add flex="1" to make the content area take remaining space */}
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
