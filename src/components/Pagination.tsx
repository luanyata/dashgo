import { Button, HStack, Box } from "@chakra-ui/react";

export function Paginator() {
  return (
    <HStack mt="8" spacing="6" justifyContent="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.400"
          _hover={{ bg: "gray.500" }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.400"
          _hover={{ bg: "gray.500" }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.400"
          _hover={{ bg: "gray.500" }}
        >
          4
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.400"
          _hover={{ bg: "gray.500" }}
        >
          5
        </Button>
      </HStack>
    </HStack>
  );
}
