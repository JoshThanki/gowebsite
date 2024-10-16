import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import logo from "../assets/su-logo.svg";

const HomePage = () => {
  return (
    <Container
      minW="70vw"
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      mt={4}
      p={8}
    >
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.300">
        Welcome to the University Go Society
      </Heading>

      <Box mb={8}>
        <Text fontSize="lg">
          Welcome to the official homepage of the University Go Society! We are
          a community of Go enthusiasts who meet regularly to play, learn, and
          enjoy the game together.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color="teal.300">
          About Us
        </Heading>
        <Text mb={4}>
          Our society is open to players of all levels, whether you're just
          getting started or an experienced player. We host weekly sessions,
          tournaments, and other events.
        </Text>
        <List spacing={3}>
          <ListItem>Weekly Go meetups</ListItem>
          <ListItem>Monthly tournaments</ListItem>
          <ListItem>Workshops for beginners and advanced players</ListItem>
        </List>
      </Box>

      {/*link box */}
      <Box mb={8} textAlign="center">
        <Heading as="h3" size="md" mb={4} color="teal.300">
          Connect with Us
        </Heading>
        <HStack spacing={8} justify="center">
          <Link href="https://www.instagram.com/gosocwarwick" isExternal>
            <Icon as={FaInstagram} boxSize={16} color="pink.400" />
          </Link>
          <Link href="https://discord.com/invite/ZsVD744QY2" isExternal>
            <Icon as={FaDiscord} boxSize={16} color="blue.500" />
          </Link>
          <Link
            href="https://www.warwicksu.com/societies-sports/societies/gosociety/"
            isExternal
          >
            <Image src={logo} boxSize={16} />
          </Link>
        </HStack>
      </Box>

      <Box textAlign="center">
        <Link
          href="https://example.com"
          isExternal
          color="teal.300"
          fontSize="lg"
        >
          Visit our external website for more info!
        </Link>
      </Box>

      <Box mt={10} textAlign="center">
        <Text>&copy; 2024 University Go Society</Text>
      </Box>
    </Container>
  );
};

export default HomePage;
