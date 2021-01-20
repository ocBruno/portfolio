import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import MostPopularArticles from "../../components/MostPopularArticles";
import { useApi } from "../../hooks/useApi.jsx";

jest.mock("../hooks/useApi.jsx");

jest.mock("MostPopularArticlesMock");

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
  const svgSpinner = screen.getByRole();

  expect(categorySelectInput).toBeInTheDocument();
  expect(timespanSelectInput).toBeInTheDocument();
  expect(svgSpinner).toBeInTheDocument();

  //SUCCESS STATE
  // success state shows components

  //ERROR STATE
  // error state loads error page
});

describe("MostPopularArticlesSnapshot", () => {
  it("loading renders as expected", () => {
    useApi.mockReturnValue({ state: "LOADING", error: "", data: [] });
  });
  it("success renders as expected with static mock data", () => {
    useApi.mockReturnValue({
      state: "SUCCESS",
      error: "",
      data: require("MostPopularArticlesMock"),
    });
  });
  const tree = renderer.create(<MostPopularArticles />).toJSON();
  expect(tree).toMatchSnapshot();
});
