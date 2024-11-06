import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Events = () => {
  // Example data for the events with locations
  const events = [
    {
      day: "Sunday",
      date: "10/11/2024",
      time: "2:00 PM",
      event: "Training Session",
      location: "FAB5.04",
    },
    {
      day: "Wednesday",
      date: "13/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB5.04",
    },
    {
      day: "Wednesday",
      date: "20/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "B2.04",
    },
    {
      day: "Wednesday",
      date: "27/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB5.04",
    },
    {
      day: "Wednesday",
      date: "5/12/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB5.04",
    },
  ];

  return (
    <Container
      maxW={{ base: '100vw', lg: '80vw' }}
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      p={8}
    >
      <Heading
        as="h1"
        textAlign="center"
        pt={10}
        mb={6}
        fontFamily="sans-serif"
        fontSize={"3rem"}
        color="#e8e6e3"
      >
        Go Society Events
      </Heading>

      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }} 
        spacing={4} 
        w="100%" 
      >
        {events.map((event, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            minW="220px"
            color="#e8e6e3"
            bg="rgba(60,60,60,0.3)"
            _hover={{
              transform: "scale(1.05)", // Slight scale effect on hover
              transition: "all 0.3s ease",
            }}
            style={{
              backdropFilter: "blur(10px)", // Frosted glass effect
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <VStack spacing={2}>
              <Text fontWeight="bold" fontSize="lg" color="#e8e6e3">
                {event.day}
              </Text>
              <Text fontSize="sm" color="#e8e6e3">
                {event.date}
              </Text>
              <Text fontSize="md" color="#e8e6e3">{event.time}</Text>
              <Text fontSize="md" color="#e8e6e3">{event.event}</Text>
              <Text fontSize="sm" color="#e8e6e3">
                Location: {event.location}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Events;
