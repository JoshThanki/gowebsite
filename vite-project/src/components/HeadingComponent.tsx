import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const HeadingComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Heading
      textAlign="center"
      mb={6}
      fontFamily="sans-serif"
      fontSize={{ base: "1.5rem", md: "2rem" }}
      color="#e8e6e3"
    >
      {children}
    </Heading>
  );
};

export default HeadingComponent;
