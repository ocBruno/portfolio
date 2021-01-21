import React from "react"
import { render, screen } from "@testing-library/react"
import MostPopularArticles from "../MostPopularArticles"

test("MostPopularArticles loads, and then displays received data", async () => {
  await render(<MostPopularArticles />)

  // INITIAL STATE
  // LOADING STATE

  // filter buttons, and loading svg are present
  const categorySelectInput = await screen.findByRole("select", {
    name: "CategorySelectInput",
  })
  const timespanSelectInput = await screen.getByRole("select", {
    name: "TimespanSelectInput",
  })
  // TODO: Make svg accessible to get by role
  // const svgSpinner = screen.getByRole();

  expect(categorySelectInput).toBeInTheDocument()
  expect(timespanSelectInput).toBeInTheDocument()
  // expect(svgSpinner).toBeInTheDocument();

  //SUCCESS STATE
  // success state shows components

  //
  //ERROR STATE
  // error state loads error page
})
