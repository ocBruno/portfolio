import React from "react";
import renderer from "react-test-renderer";

import ImageArticle from "../components/ImageArticle";

jest.mock("../hooks/useApi.jsx");
describe("ImageArticleSnapshot", () => {
  it("component renders as expected", () => {});

  const tree = renderer.create(<ImageArticle />).toJSON();
  expect(tree).toMatchSnapshot();
});
