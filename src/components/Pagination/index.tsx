import { HStack, Box } from "@chakra-ui/react";
import PaginationItem from './PaginationItem'

export function Paginator() {
  return (
    <HStack mt="8" spacing="6" justifyContent="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">

        <PaginationItem pageNumber={1} isCurrent></PaginationItem>

        <PaginationItem pageNumber={2} ></PaginationItem>

        <PaginationItem pageNumber={3} ></PaginationItem>

        <PaginationItem pageNumber={4} ></PaginationItem>

        <PaginationItem pageNumber={5} ></PaginationItem>

        <PaginationItem pageNumber={6} ></PaginationItem>

        <PaginationItem pageNumber={7} ></PaginationItem>

        <PaginationItem pageNumber={8} ></PaginationItem>

      </HStack>
    </HStack>
  );
}
