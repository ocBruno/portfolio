import { NY_TIMES_API_KEY } from "../../env"

export const getCriticsPicks = async () => {
  return await fetch(
    `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${NY_TIMES_API_KEY}`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return JSON.stringify(err)
    })
}
