import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import logo from "../assets/su-logo.svg";

const HomePage = () => {
  return (
    <Container
      maxW={{ base: '100vw', lg: '80vw' }} 
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      paddingTop="3.5rem"
      fontFamily="Arial, sans-serif"
      color = "#c2bdb9"
    >
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        // mt={{base: 4, lg: 8}}
        fontFamily="sans-serif"
        color = "#e8e6e3"
        fontSize={{ base: '2rem', md: '3rem' }}
      >
        Warwick Go Society Homepage
      </Heading>

      <Box mb={8}>
        <Text
        fontSize={{ base: '1.3rem', md: '1.5rem' }} // fontSize changes based on screen size
        sx={{
          hyphens: { base: 'auto', md: 'none' }, // Hyphenation for small screens (base, sm), none for medium and up
          wordWrap: 'break-word', // Always allow word wrapping
        }}
        > 
          Go (aka Weiqi / Igo / Baduk) originated and was invented in China over
          4000 years ago. The few simple rules of the game branch out into a
          fantastic range of practically infinite possibilities entirely based
          on your own decisions.
        </Text>
        <Box my={4} />
          <Text
            fontSize={{ base: '1.3rem', md: '1.5rem' }} // fontSize changes based on screen size
            sx={{
              hyphens: { base: 'auto', md: 'none' }, // Hyphenation for small screens (base, sm), none for medium and up
              wordWrap: 'break-word', // Always allow word wrapping
            }}
          > 
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
        <Heading 
          as = "h2"
          size = "lg" 
          mb = {4}
          color = "#e8e6e3"
          fontFamily = "sans-serif"
          fontSize={{ base: '2rem', md: '3rem' }}
          textAlign={"center"}
        >
          About Us
        </Heading>
        <Text
          fontSize={{ base: '1.3rem', md: '1.5rem' }} // fontSize changes based on screen size
          sx={{
            hyphens: { base: 'auto', md: 'none' }, // Hyphenation for small screens (base, sm), none for medium and up
            wordWrap: 'break-word', // Always allow word wrapping
          }}
        > 
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
        <Heading
          as="h2"
          size="md"
          mb={4}
          color="#e8e6e3" 
          fontFamily="sans-serif"
          fontSize={"2rem"}
        >
          Connect with us
        </Heading>
        <HStack spacing={8} justify="center">
          <Link href="https://www.instagram.com/gosocwarwick" isExternal>
            <Icon as={FaInstagram} boxSize={24} color="pink.400" />
          </Link>
          <Link href="https://discord.com/invite/ZsVD744QY2" isExternal>
            <Icon as={FaDiscord} boxSize={24} color="blue.500" />
          </Link>
          <Link
            href="https://www.warwicksu.com/societies-sports/societies/gosociety/"
            isExternal
          >
            <Image src={logo} boxSize={24} />
          </Link>
        </HStack>
      </Box>

      <Box mt={10} textAlign="center">
        <Text>&copy; 2024 University Go Society</Text>
      </Box>
    </Container>
  );
};

export default HomePage;
