import { Container, Heading } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container bg={"#2C2F32"} textColor={"#D1D5DB"} minW={"80vw"} shadow={"1g"}>
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
