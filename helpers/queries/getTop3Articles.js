import { sections } from "../constants"
import { NY_TIMES_API_KEY } from "../env"
export const getTop3Articles = async (key) => {
  var section
  if (key === undefined) {
    section = sections.world
  } else {
    section = key.queryKey[1]
  }
  console.log(section)
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
