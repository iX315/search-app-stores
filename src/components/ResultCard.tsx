import { Box, Button, Image, Stack, Text } from "@chakra-ui/react"
import { GoogleApiParsedData } from "../helpers/googleSearch"
import { CopyBadge } from "./CopyBadge"

export const ResultCard = ({
  appId,
  title,
  link,
  imageUrl,
}: GoogleApiParsedData) => (
  <Box rounded="20px" overflow="hidden" backgroundColor="#e8e8e8">
    <Image src={imageUrl} alt={"image for: " + title} />
    <Box p={5}>
      <Stack align="center">
        <CopyBadge label={appId} />
      </Stack>
      <Stack align="center">
        <Text as="h2" fontWeight="normal" my={2}>
          {title}
        </Text>
        <Button as="a" href={link} target="_blank">
          Store link
        </Button>
      </Stack>
    </Box>
  </Box>
)
