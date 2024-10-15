import { Box, Container, Heading, Link, List, ListItem, Text } from "@chakra-ui/react"

const ContactsPage = () => {
    return (
        <Container
          minW="70vw"
          boxShadow="lg"
          bg="rgba(0,0,0,0.8)"
          textColor="gray.300"
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
}

export default ContactsPage;