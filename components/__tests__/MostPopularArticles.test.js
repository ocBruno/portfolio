import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import MostPopularArticles from "../MostPopularArticles"
import { act } from "react-dom/test-utils"
import MostPopularArticlesData from "../../__tests__/data/MostPopularArticlesData.json"

test("MostPopularArticles loads spinner, then shows articles and filter select", async () => {
  await act(async () => {
    await render(<MostPopularArticles />)
  })

  // LOADING STATE
  const articlesLoadingSpinner = screen.getByTestId("articlesLoadingSpinner")
  expect(articlesLoadingSpinner).toBeInTheDocument()

  // filter buttons, and success data is present
  waitFor(() => {
    const categorySelectInput = screen.getByTestId("CategorySelectInput")
    const timespanSelectInput = screen.getByTestId("TimespanSelectInput")

    expect(categorySelectInput).toBeInTheDocument()
    expect(timespanSelectInput).toBeInTheDocument()

    const mockData = MostPopularArticlesData.results

    mockData.forEach((mockArticle) => {
      expect(screen.getByText(mockArticle.title))
    })
  })
})
