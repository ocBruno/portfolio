import React from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
// useApi ( url to fetch): { state: ..., data: ... and error: ... }
// dataUpdater makes by array default for useEffect to run once
export const useApi = ({ url, dataUpdater = [] }) => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  React.useEffect(
    () => {
      setPartData({
        state: apiStates.LOADING,
      });
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPartData({
            state: apiStates.SUCCESS,
            data: data.results,
          });
        })
        .catch(() => {
          setPartData({
            state: apiStates.ERROR,
            error: "fetch failed",
          });
        });
    },
    dataUpdater === [] ? [] : [dataUpdater]
  );

  return data;
};
