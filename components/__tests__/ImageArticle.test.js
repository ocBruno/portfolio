import React from "react"
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react"

import MostPopularArticlesData from "../../__tests__/data/MostPopularArticlesData.json"
import ImageArticle from "../ImageArticle"

const article = MostPopularArticlesData.results[0]
const articleImgSrc = article.media[0]["media-metadata"][2].url
const articleSource = article.source
const articleTitle = article.title
const articleUrl = article.url
const articleId = "article0"
test("ImageArticle loads correctly with id, image, title , link and source", () => {
  act(() => {
    render(
      <ImageArticle
        id={articleId}
        source={articleSource}
        title={articleTitle}
        link={articleUrl}
        imgSrc={articleImgSrc}
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

  expect(screen.getByRole("img")).toHaveAttribute("src", articleImgSrc)
})
