import React from "react";
import { render } from "@testing-library/react";

import MostPopularArticles from "../components/MostPopularArticles";

jest.mock("../MostPopularArticles");

test("MostPopularArticles loads, and then displays received data", () => {
  render(<MostPopularArticles />);

  // INITIAL STATE
  // LOADING STATE

  // filter buttons, and loading svg are present
  const categorySelectInput = screen.getByRole("select", {
    name: "CategorySelectInput",
  });
  const timespanSelectInput = screen.getByRole("select", {
    name: "TimespanSelectInput",
  });
  // TODO: Make svg accessible to get by role
  // const svgSpinner = screen.getByRole();

  expect(categorySelectInput).toBeInTheDocument();
  expect(timespanSelectInput).toBeInTheDocument();
  // expect(svgSpinner).toBeInTheDocument();

  //SUCCESS STATE
  // success state shows components

  //
  //ERROR STATE
  // error state loads error page
});
