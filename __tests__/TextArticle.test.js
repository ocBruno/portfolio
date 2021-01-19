import React from "react";
import renderer from "react-test-renderer";

import TextArticle from "../components/TextArticle";

jest.mock("../hooks/useApi.jsx");
describe("TextArticleSnapshot", () => {
  it("component renders as expected", () => {});

  const tree = renderer.create(<TextArticle />).toJSON();
  expect(tree).toMatchSnapshot();
});
