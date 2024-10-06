import { Box, Text } from '@chakra-ui/react';
import theme from '../theme';

const History = () => {
  return (
    <Box bg={theme.colors.lightBeige} p={4} borderRadius="md" maxWidth="80vw">
      <Text color={theme.colors.black}>This is a box with a light beige background.</Text>
      <Text color={theme.colors.white} bg={theme.colors.darkBrown} p={2}>
        This text is on a dark brown background.
      </Text>
      <Box bg={theme.colors.warmLight} p={2} borderRadius="md">
        <Text color={theme.colors.black}>This box uses the warm light color.</Text>
      </Box>
    </Box>
  );
};

export default History;