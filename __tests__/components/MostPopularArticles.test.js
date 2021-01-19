import React from "react";
import renderer from "react-test-renderer";

import MostPopularArticles from "../../components/MostPopularArticles";
import { useApi } from "../../hooks/useApi.jsx";

import { NY_TIMES_MOST_POPULAR_SHARED_MONTHLY_MOCK_DATA } from "./MostPopularArticles.mock";

jest.mock("../hooks/useApi.jsx");
describe("MostPopularArticlesSnapshot", () => {
  it("loading renders as expected", () => {
    useApi.mockReturnValue({ state: "LOADING", error: "", data: [] });
  });
  it("success renders as expected with static mock data", () => {
    useApi.mockReturnValue({
      state: "SUCCESS",
      error: "",
      data: NY_TIMES_MOST_POPULAR_SHARED_MONTHLY_MOCK_DATA,
    });
  });
  const tree = renderer.create(<MostPopularArticles />).toJSON();
  expect(tree).toMatchSnapshot();
});
