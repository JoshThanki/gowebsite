import {
  Box,
  Image,
  Text,
  Flex,
  Link,
  Heading,
  Container,
} from "@chakra-ui/react";
import xiheng from "../assets/execPhotos/ceo.jpg";
import josh from "../assets/execPhotos/josh.jpeg";
import joseph from "../assets/execPhotos/joseph.jpeg";
import matas from "../assets/execPhotos/matas.png";
import naman from "../assets/execPhotos/naman2.png";
import jason from "../assets/execPhotos/jason.jpeg";
import edmund from "../assets/execPhotos/edmund.jpeg";

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
      pb={4}
      w="220px" // Fixed width
      h="311px" // Fixed height
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
        objectFit="cover" // Prevents image from being squashed
      />
      <Heading as="h3" size="lg" mb={2} isTruncated>
        {name}
      </Heading>
      <Text
        fontSize="md"
        fontWeight="bold"
        mb={2}
        color="gray.400"
        noOfLines={1}
        css={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {position}
      </Text>
      <Link
        href={`mailto:${email}`}
        color="gray.500"
        fontSize="sm"
        noOfLines={1}
        css={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        isExternal
      >
        {email}
      </Link>
    </Box>
  );
};

const ContactsPage: React.FC = () => {
  const contacts: ContactCardProps[] = [
    {
      name: "Xiheng",
      picture: xiheng, // Replace with actual image URL
      position: "President",
      email: "xiheng.yao@warwick.ac.uk",
    },
    {
      name: "Joseph",
      picture: joseph, // Replace with actual image URL
      position: "Secretary",
      email: "joseph.curtis@warwick.ac.uk",
    },
    {
      name: "Naman ",
      picture: naman, // Replace with actual image URL
      position: "Treasurer",
      email: "naman.maheshwari@warwick.ac.uk",
    },
    {
      name: "Edmund",
      picture: edmund, // Replace with actual image URL
      position: "Logistics Officer",
      email: "edmund.smith@warwick.ac.uk",
    },
    {
      name: "Jason",
      picture: jason, // Replace with actual image URL
      position: "Training Officer",
      email: "jiaxi.feng@warwick.ac.uk",
    },
    {
      name: "Matas",
      picture: matas, // Replace with actual image URL
      position: "Tech Officer",
      email: "matas.sabakinas@warwick.ac.uk",
    },
    {
      name: "Josh",
      picture: josh, // Replace with actual image URL
      position: "Tech Officer",
      email: "josh.thanki@warwick.ac.uk",
    },
    {
      name: "Wenzhou",
      picture: xiheng, // Replace with actual image URL
      position: "Publicity Officer",
      email: "wenzhou.mei@warwick.ac.uk",
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
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        color="gray.300"
        p={3}
        mt={4}
      >
        Contacts
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap={6}
        p={3}
      >
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </Flex>
    </Container>
  );
};

export default ContactsPage;
