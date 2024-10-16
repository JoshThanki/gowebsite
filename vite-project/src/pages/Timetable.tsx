import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Timetable = () => {
  // Example data for the events with locations
  const events = [
    {
      day: "Wednesday",
      date: "18/10/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
    {
      day: "Wednesday",
      date: "25/10/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
    {
      day: "Wednesday",
      date: "01/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
    {
      day: "Wednesday",
      date: "08/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
    {
      day: "Wednesday",
      date: "15/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
    {
      day: "Wednesday",
      date: "22/11/2024",
      time: "2:00 PM",
      event: "Club Session",
      location: "FAB3.17",
    },
  ];

  return (
    <Container
      minW="70vw"
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      mt={4}
      p={8}
    >
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="gray.300">
        Go Society Events
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {events.map((event, index) => (
          <Box
            key={index}
            p={4}
            bg="gray.700"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            color="gray.300"
            minW="220px"
          >
            <VStack spacing={2}>
              <Text fontWeight="bold" fontSize="lg">
                {event.day}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {event.date}
              </Text>
              <Text fontSize="md">{event.time}</Text>
              <Text fontSize="md">{event.event}</Text>
              <Text fontSize="sm" color="gray.400">
                Location: {event.location}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Timetable;
