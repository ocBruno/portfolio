import { NY_TIMES_API_KEY } from "../../env"

export const getArticlesStream = async () => {
  const section = "world"

  return await fetch(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${section}.json?api-key=${NY_TIMES_API_KEY}`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return JSON.stringify(err)
    })
}
