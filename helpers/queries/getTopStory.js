export const getTopStory = async () => {
  const NY_TIMES_API_KEY = process.env.NEXT_PUBLIC_NY_TIMES_API_KEY
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
