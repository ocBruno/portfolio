import { returnShorthandName } from "../../helpers/string";

describe("string helpers render as expected", () => {
  test("returnShorthandName", () => {
    const string =
      "This string will be cropped at 30 characters or at a different number if provided second argument length with three trailing dots";
    const length = 3;
    expect(returnShorthandName(string, length)).toBe("Thi" + "...");
  });
});
