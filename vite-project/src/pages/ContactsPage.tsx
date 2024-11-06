import {
  Box,
  Image,
  Text,
  Link,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import xiheng from "../assets/execPhotos/xiheng.jpg";
import josh from "../assets/execPhotos/josh.jpeg";
import joseph from "../assets/execPhotos/joseph.jpeg";
import matas from "../assets/execPhotos/matas.jpg";
import naman from "../assets/execPhotos/naman.png";
import jason from "../assets/execPhotos/jason.jpeg";
import edmund from "../assets/execPhotos/edmund.jpeg";
import wenzhou from "../assets/execPhotos/wenzhou.jpg";

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
      bg="rgba(60,60,60,0.3)" // Dark gray background
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      pb={4}
      w="100%" // Fixed width
      h="280px" // Fixed height
      textAlign="center"
      _hover={{
        transform: "scale(1.05)", // Slight scale effect on hover
        transition: "all 0.3s ease",
      }}
      style={{
        backdropFilter: "blur(10px)", // Frosted glass effect
        WebkitBackdropFilter: "blur(10px)",
      }}
      fontFamily={"sans-serif"}
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
      <Heading
        as="h3"
        size="lg"
        mb={2}
        isTruncated
        fontFamily={"sans-serif"}
        color="#e8e6e3"
      >
        {name}
      </Heading>
      <Text
        fontSize="md"
        fontWeight="bold"
        mb={2}
        noOfLines={1}
        css={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        fontFamily="sans-serif"
        color="#e8e6e3"
      >
        {position}
      </Text>
      <Link
        href={`mailto:${email}`}
        fontSize="sm"
        noOfLines={1}
        css={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        isExternal
        color="#cdc8c2"
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
      name: "Jiaxi",
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
      picture: wenzhou, // Replace with actual image URL
      position: "Publicity Officer",
      email: "wenzhou.mei@warwick.ac.uk",
    },
  ];

  return (
    <Container
      maxW={{ base: '100vw', lg: '80vw' }}
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      p={8}
      pt={6}
    >
      <Heading
        as="h1"
        textAlign="center"
        pt={8}
        mb={6}
        fontFamily="sans-serif"
        fontSize={"3rem"}
        color="#e8e6e3"
      >
        Contacts
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }} 
        spacing={4} 
        w="100%" 
      >
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ContactsPage;
