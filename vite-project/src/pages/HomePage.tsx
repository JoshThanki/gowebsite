import { Container, Heading } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container minW="70vw"  boxShadow="lg" bg="rgba(0,0,0,0.8)" textColor="gray.300" shadow={"1g"} borderWidth={1} borderColor="gray.00">
      <Heading>Welcome to the HomePage</Heading>
      <p>This is some random HTML code!</p>

      <div className="container">
        <h2>About Us</h2>
        <p>We are randomly adding HTML elements to this page.</p>

        <ul>
          <li>Random List Item 1</li>
          <li>Random List Item 2</li>
          <li>Random List Item 3</li>
        </ul>

        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Visit this random website!
        </a>

        <footer>
          <p>&copy; 2024 Random HTML Code</p>
        </footer>
      </div>
    </Container>
  );
}

export default HomePage;
