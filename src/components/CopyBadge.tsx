import {
    Alert,
  AlertIcon,
  Badge,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react"

type CopyBadgeProps = {
  label: string
}

export const CopyBadge = ({ label }: CopyBadgeProps) => (
  <Popover>
    <PopoverTrigger>
      <Badge
        variant="solid"
        maxW="150px"
        overflow="hidden"
        textOverflow="ellipsis"
        colorScheme="green"
        rounded="full"
        cursor="pointer"
        title={"-> click to copy\n" + label}
        onClick={() => navigator.clipboard.writeText(label)}
        px={2}
      >
        {label}
      </Badge>
    </PopoverTrigger>
    <PopoverContent>
      <Alert status="success" variant="subtle">
        <AlertIcon />
        Copied!
      </Alert>
    </PopoverContent>
  </Popover>
)
