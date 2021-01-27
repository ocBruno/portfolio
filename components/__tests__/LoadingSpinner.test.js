import React from "react"
import { act } from "react-dom/test-utils"
import { render, screen } from "@testing-library/react"

import LoadingSpinner from "../LoadingSpinner"

const spinnerTestId = "testLoadingSpinner"
const spinnerTestDescription = "Test loading spinner"

test("Loading spinner loads as expected", () => {
  act(() => {
    render(
      <LoadingSpinner id={spinnerTestId} description={spinnerTestDescription} />
    )
  })

  // Component is rendered
  const spinner = screen.getByTestId(spinnerTestId)
  expect(spinner).toBeInTheDocument()
})
