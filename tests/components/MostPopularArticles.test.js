import React from "react";
import renderer from "react-test-renderer";

import MostPopularArticles from "../../components/MostPopularArticles";
import { useApi } from "../../hooks/useApi.jsx";

jest.mock("../../hooks/useApi.jsx");
describe("MostPopularArticlesSnapshot", () => {
  it("loading renders as expected", () => {
    useApi.mockReturnValue({ state: "LOADING", error: "", data: [] });
  });
  const tree = renderer.create(<MostPopularArticles />).toJSON();
  expect(tree).toMatchSnapshot();
});
