import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import { KeyboardEvent, useRef, useState } from "react"
import { Results } from "../components/Results"

const Home: NextPage = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null)
  const [resultData, setResultData] = useState(null)
  const [errorData, setErrorData] = useState(null)

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  const handleSearch = async () => {
    const q = inputSearchRef.current?.value

    const res = await fetch("/api/search?q=" + q)
    const { result, error } = await res.json()

    if (error) {
      setErrorData(error)
    } else {
      // reset error data if any...
      setErrorData(null)
      setResultData(result)
    }
  }

  return (
    <Box p="4">
      <Head>
        <title>Search App Stores</title>
        <meta name="description" content="quick search engine for apps IDs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        h="33vh"
        direction="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Text fontSize="1.5em">
          Search in Google Play Store and Galaxy Store
        </Text>
        <Input maxW="400px" onKeyDown={handleEnter} ref={inputSearchRef} />
        <Button onClick={handleSearch}>Search</Button>
      </Flex>

      {errorData && (
        <Box textAlign="center" textColor="red">
          An API error has occurred
        </Box>
      )}
      {resultData && <Results data={resultData} />}

      <Box as="footer" textAlign="center" mt="50px">
        Brought to you by{" "}
        <a href="https://315solutions.de" target="_blank" rel="noreferrer">
          315solutions
        </a>{" "}
        with ❤️
      </Box>
    </Box>
  )
}

export default Home
