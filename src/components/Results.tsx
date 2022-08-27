import { Grid } from "@chakra-ui/react"
import { GoogleApiParsedData } from "../helpers/googleSearch"
import { ResultCard } from "./ResultCard"

type ResultsProps = {
  data?: GoogleApiParsedData[]
}

export const Results = ({ data }: ResultsProps) => {
  if (!data || data.length === 0) return <></>

  return (
    <Grid
      gridTemplateColumns="repeat(6, 1fr)"
      gridTemplateRows="repeat(6, 1fr)"
      gap="2em"
    >
      {data.map((item: any, i) => (
        <ResultCard key={i} {...item} />
      ))}
    </Grid>
  )
}
