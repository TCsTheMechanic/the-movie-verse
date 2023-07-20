export const noCacheRequest = async (requestUrl: string) => {
  const res = await fetch(requestUrl, {
    cache: "no-store",
    headers: {
      Authorization: String(process.env.API_KEY),
    },
  })

  return res.json()
}
