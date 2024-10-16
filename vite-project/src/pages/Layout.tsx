import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import backgroundImage from '../assets/go_background.jpg';

const Layout = () => {

  return (
    <Flex h="100vh" flexDir="column">
      {" "}
      <NavBar />
      <Box h="5vh" />      
      <Box flex="1" 
           backgroundImage={backgroundImage}
           backgroundSize="cover" 
           backgroundPosition="center" 
           backgroundRepeat="no-repeat" 
           backgroundAttachment="fixed"
           >
        {" "}
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
