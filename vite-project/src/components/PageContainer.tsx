import { Container } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface PageContainerProps extends PropsWithChildren {
  paddingTop?: string
}

const PageContainer: React.FC<PageContainerProps> = ({ children, paddingTop = "5rem" }) => {
  return (
    <Container
      maxWidth={{ base: "100vw", lg: "80vw" }}
      minHeight="100vh"
      boxShadow="lg"
      background="rgba(0,0,0,0.8)"
      textColor="gray.300"
      paddingTop={paddingTop}
      fontFamily="Arial, sans-serif"
      color="#c2bdb9"
      display="flex"
      flexDirection="column"
    >
      {children}
    </Container>
  )
}

export default PageContainer
