import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import HeadingComponent from "../components/HeadingComponent";

const Events = () => {
  // Example data for the events with locations
  const events = [
    // Regular Sessions
    {
      day: "Wednesday",
      date: "08/01/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "15/01/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "22/01/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "29/01/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "05/02/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "12/02/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "19/02/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "A1.11 (Soc Sci)",
    },
    {
      day: "Wednesday",
      date: "26/02/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "05/03/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB5.03",
    },
    {
      day: "Wednesday",
      date: "12/03/2025",
      time: "14:00 - 16:00",
      event: "Regular Session",
      location: "FAB1.11",
    },

    // Teaching Sessions
    {
      day: "Sunday",
      date: "12/01/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "19/01/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "26/01/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "02/02/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "09/02/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "16/02/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "02/03/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "09/03/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Sunday",
      date: "16/03/2025",
      time: "14:00 - 17:00",
      event: "Teaching Session",
      location: "FAB5.03",
    },
    {
      day: "Saturday",
      date: "25/01/2025",
      time: "14:00 - 17:00",
      event: "Go Tournament",
      location: "FAB1.11",
    },
  ];

  const currentDate = new Date();

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // No need to add 1 to the day
  };

  const upcomingEvents = events
    .filter((event) => {
      const eventDate = parseDate(event.date);
      return eventDate >= currentDate;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime(); // Sort by date in ascending order
    })
    .slice(0, 6); // Only show the first 6 upcoming events
  return (
    <PageContainer>
      <HeadingComponent> Upcoming Events </HeadingComponent>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={4}
        w="100%"
      >
        {upcomingEvents.map((event, index) => (
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
              <Text fontSize="md" color="#e8e6e3">
                {event.time}
              </Text>
              <Text fontSize="md" color="#e8e6e3">
                {event.event}
              </Text>
              <Text fontSize="sm" color="#e8e6e3">
                Location: {event.location}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </PageContainer>
  );
};

export default Events;
