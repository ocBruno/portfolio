import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import LoadingSpinner from "../LoadingSpinner"
import { useQuery } from "react-query"
import { getLocalWeather } from "../../helpers/queries/getLocalWeather"

const WeatherContainer = styled.div`
  width: 180px;
  padding: 1rem;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 6px;
`

const LocaleName = styled.div`
  font-size: 11px;
`
const LocaleWeatherDescription = styled.div`
  font-size: 11px;
  margin-bottom: 3px;
`
const LocaleTemperature = styled.div`
  font-size: 10px;
  font-weight: 600;
`

const LocalWeatherContainer = () => {
  const [userLatitude, setUserLatitude] = useState(undefined)

  const [userLongitude, setUserLongitude] = useState(undefined)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      setUserLatitude(lat)
      setUserLongitude(long)
    })
  }, [])

  const hasFetchedPosition =
    userLongitude !== undefined && userLatitude !== undefined
  const { isLoading, isError, data, error } = useQuery(
    ["localWeather", { lat: userLatitude, long: userLongitude }],
    getLocalWeather,
    { enabled: hasFetchedPosition }
  )

  if (isLoading || !hasFetchedPosition) {
    return (
      <WeatherContainer>
        <LoadingSpinner />
      </WeatherContainer>
    )
  }
  if (isError) {
    return <span>Whoops</span>
  }
  console.log(data)
  const localeName = data.name
  const weatherDescription = data.weather[0].main
  const temperatureCelsius = Math.round(data.main.temp - 273.15)
  return (
    <WeatherContainer>
      <LocaleName>{localeName}</LocaleName>
      <LocaleWeatherDescription>{weatherDescription}</LocaleWeatherDescription>
      <LocaleTemperature>{temperatureCelsius}°C</LocaleTemperature>
    </WeatherContainer>
  )
}

LocalWeatherContainer.propTypes = {}

export default LocalWeatherContainer
