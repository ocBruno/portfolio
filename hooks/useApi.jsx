import React from "react"
import _fetch from "cross-fetch"
const {
  AbortController,
  abortableFetch,
} = require("abortcontroller-polyfill/dist/cjs-ponyfill")

const { fetch } = abortableFetch(_fetch)

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}
// useApi ( url to fetch): { state: ..., data: ... and error: ... }
// dataUpdater makes by array default for useEffect to run once
export const useApi = ({ url }, dependencyArray = []) => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  })

  const setPartData = (partialData) => setData({ ...data, ...partialData })

  // setup abort controller to cancel fetch request on cleanup
  const controller = new AbortController()
  const { signal } = controller

  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    })
    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data: data.results,
        })
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        })
      })
    return () => {
      controller.abort()
    }
  }, dependencyArray)

  return data
}
