import {
  Box,
  Image,
  Text,
  Flex,
  Link,
  Heading,
  Container,
} from "@chakra-ui/react";
import xiheng from "../assets/ceo.jpg";

interface ContactCardProps {
  name: string;
  picture: string;
  position: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  picture,
  position,
  email,
}) => {
  return (
    <Box
      bg="gray.800" // Dark gray background
      color="gray.300" // Light gray text color
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      maxW="sm"
      textAlign="center"
      _hover={{
        transform: "scale(1.05)", // Slight scale effect on hover
        transition: "all 0.3s ease",
      }}
    >
      <Image
        borderRadius="full"
        boxSize="120px"
        src={picture}
        alt={`${name}'s picture`}
        mx="auto"
        mb={4}
      />
      <Heading as="h3" size="lg" mb={2}>
        {name}
      </Heading>
      <Text fontSize="md" fontWeight="bold" mb={2} color="gray.400">
        {position}
      </Text>
      <Link href={`mailto:${email}`} color="gray.500" fontSize="sm" isExternal>
        {email}
      </Link>
    </Box>
  );
};

const ContactsPage: React.FC = () => {
  const contacts: ContactCardProps[] = [
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Xiheng Yao",
      picture: xiheng, // Replace with actual image URL
      position: "CEO",
      email: "xiheng.yao@warwick.ac.uk",
    },
  ];

  return (
    <Container
      minW="70vw"
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      p={8}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap={6}
        p={8}
      >
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </Flex>
    </Container>
  );
};

export default ContactsPage;
