import { X_RAPIDAPI_KEY } from "../env"

export const getLocalWeather = async (key) => {
  const lat = key.queryKey[1].lat
  const long = key.queryKey[1].long

  return await fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${long}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return JSON.stringify(err)
    })
}
