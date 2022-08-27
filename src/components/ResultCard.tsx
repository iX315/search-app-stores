import { Badge, Box, Button, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { GoogleApiParsedData } from "../helpers/googleSearch"

export const ResultCard = ({
  appId,
  title,
  link,
  imageUrl,
}: GoogleApiParsedData) => (
  <Box as="a" rounded="20px" overflow="hidden" href={link} target="_blank" backgroundColor="#e8e8e8">
    <Image src={imageUrl} alt={"image for: " + title} />
    <Box p={5}>
      <Stack align="center">
        <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
          {appId}
        </Badge>
      </Stack>
      <Stack align="center">
        <Text as="h2" fontWeight="normal" my={2}>
            {title}
        </Text>
      </Stack>
    </Box>
  </Box>
)
