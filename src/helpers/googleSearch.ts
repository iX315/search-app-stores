const googleApiUrl = "https://googleapis.com/customsearch/v1"
const googleApiKey = process.env.GOOGLE_API_KEY || ""
export const playStoreApiKey = process.env.PLAY_STORE_CX || ""
export const galaxyStoreApiKey = process.env.GALAXY_STORE_CX || ""

type ApiRequestProps = {
  query?: string
  cx?: string
}

// todo typesafe response
export const apiRequest = async ({
  query,
  cx = playStoreApiKey,
}: ApiRequestProps) => {
  if (!query) return null

  const parameters = ["key=" + googleApiKey, "cx=" + cx, "q=" + "next.js"]

  const res = await fetch(`${googleApiUrl}?${parameters.join("&")}`)

  return await res.json()
}

export type GoogleApiParsedData = {
  title: string
  link: string
  appId: string
  imageUrl: string
}

// todo need to typesafe implement google api "items" object
export const parseItems = (items: any) => {
  return items.map((i: any) => {
    const appId = i.link.match(/(?!id=|\/)com\..+?(?=&|$)/)?.[0] || ""
    const imageData = i.pagemap.cse_thumbnail ?? i.pagemap.cse_image

    const imageUrl = imageData?.[0]?.src || ""
    return {
      title: i.title,
      link: i.link,
      appId,
      imageUrl,
    }
  })
}
