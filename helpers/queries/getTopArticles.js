import { NY_TIMES_API_KEY } from "../env"
export const getTopArticles = async () => {
  const section = "world"
  return await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${NY_TIMES_API_KEY}`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return err
    })
}
