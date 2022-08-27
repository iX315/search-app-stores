// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import {
  apiRequest,
  galaxyStoreApiKey,
  GoogleApiParsedData,
  parseItems,
} from "../../helpers/googleSearch"

type ResponseData = {
  result?: GoogleApiParsedData[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let { q } = req.query

  try {
    if (typeof q !== "string") {
      throw new Error("parameter 'q' is not a string")
    }
    const { items: googleItems } = await apiRequest({ query: q })
    const { items: samsungItems } = await apiRequest({
      query: q,
      cx: galaxyStoreApiKey,
    })

    const result = [...parseItems(googleItems), ...parseItems(samsungItems)]

    res.status(200).json({ result })
  } catch (error: any) {
    // todo typesafe error
    res.status(500).json({ error: error.message })
  }
}
