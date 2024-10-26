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
  Divider,
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
      p={8}
    >
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="gray.200">
        University of Warwick Go Society Homepage
      </Heading>

      <Box mb={8}>
        <Text fontSize="lg">
          Go (aka Weiqi / Igo / Baduk) originated and was invented in China over
          4000 years ago. The few simple rules of the game branch out into a
          fantastic range of practically infinite possibilities entirely based
          on your own decisions.
        </Text>
        <Box my={4} />
        <Text fontSize="lg">
          Every game, with only the alternating placement of black and white
          stones on a board with intersecting lines, tells a beautiful story of
          war, entailing sacrifice, strategy, and struggle. Go is still the
          world's oldest board game continuously played today, and with Warwick
          Go Society you can meet others who play Go, and learn how to play Go
          yourself. You can find details of when and where we meet below, so
          mark your diaries, and come along to our regular sessions!
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color="gray.200">
          About Us
        </Heading>
        <Text mb={4}>
          Our society is open to players of all levels, from beginners to
          experienced 5-dan players. You can find an opponent who is of equal
          strength on the society ladder. We host weekly sessions, official
          tournaments with other unis in the UK, as well as a variety of collabs
          with a multitude of different societies within Warwick, such as Japan
          Society and Mahjong Society.
        </Text>
      </Box>

      {/*link box */}
      <Box mb={8} textAlign="center">
        <Heading as="h3" size="md" mb={4} color="gray.200">
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
          color="gray.200"
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
