import { NY_TIMES_API_KEY } from "../nytimes"
export const getHeadlineArticle = async () => {
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
      return articlesWithAbstract[0]
    })
    .catch((err) => {
      return JSON.stringify(err)
    })
}
