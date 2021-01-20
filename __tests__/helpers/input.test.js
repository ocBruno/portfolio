import { useInput, useSelect } from "../helpers/input";
import renderer from "react-test-renderer";
const categoryValues = Object.keys(API_MAPPED_CATEGORIES);
describe("input helpers render accordingly", () => {
  test("useSelect", () => {
    it(`renders as expected with the following params({ name: 'CategorySelectInput', values: ${categoryValues},className: selectStyles.selectCss,
  });
`);
  });
});
