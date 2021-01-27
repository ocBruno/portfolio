import React from "react"
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react"

import MostPopularArticlesData from "../../__tests__/data/MostPopularArticlesData.json"
import TextArticle from "../TextArticle"

const article = MostPopularArticlesData.results[0]
const articleSource = article.source
const articleTitle = article.title
const articleUrl = article.url
const articleId = "article0"
test("TextArticle loads correctly with id, title , link and source", () => {
  act(() => {
    render(
      <TextArticle
        id={articleId}
        source={articleSource}
        title={articleTitle}
        link={articleUrl}
      />
    )
  })

  // Component is rendered
  const article = screen.getByTestId(articleId)
  expect(article).toBeInTheDocument()

  // filter buttons, and success data is present
  const title = screen.getByText(articleTitle)
  const source = screen.getByText(articleSource)

  expect(title).toBeInTheDocument()
  expect(source).toBeInTheDocument()
})
