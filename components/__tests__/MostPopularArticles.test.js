import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import MostPopularArticles from "../MostPopularArticles"
import { act } from "react-dom/test-utils"
test("MostPopularArticles loads, and then displays received data", async () => {
  await act(async () => {
    await render(<MostPopularArticles />)
  })

  // INITIAL STATE
  // LOADING STATE

  const articlesLoadingSpinner = screen.getByTestId("articlesLoadingSpinner")

  expect(articlesLoadingSpinner).toBeInTheDocument()

  // filter buttons, and loading svg are present
  waitFor(() => {
    const categorySelectInput = screen.getByTestId("CategorySelectInput")
    const timespanSelectInput = screen.getByTestId("TimespanSelectInput")

    expect(categorySelectInput).toBeInTheDocument()
    expect(timespanSelectInput).toBeInTheDocument()
  })
  // TODO: Make svg accessible to get by role

  //SUCCESS STATE
  // success state shows components

  //
  //ERROR STATE
  // error state loads error page
})
