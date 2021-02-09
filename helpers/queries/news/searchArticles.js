import { NY_TIMES_API_KEY } from "../../env"
export const searchArticles = async (key) => {
  const activeQueryValue = key.queryKey[1]
  return await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${activeQueryValue}&api-key=${NY_TIMES_API_KEY}`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return err
    })
}
