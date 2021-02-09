import { NY_TIMES_API_KEY } from "../env"
export const getTop3Articles = async () => {
  const section = "world"

  return await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${NY_TIMES_API_KEY}`
  )
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const articlesWithAbstract = data.results.filter(
        (article) => article.abstract !== ""
      )
      return articlesWithAbstract.slice(0, 3)
    })
    .catch((err) => {
      return JSON.stringify(err)
    })
}
