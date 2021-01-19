import { appendEllipses } from "../helpers/string";

describe("string helpers render as expected", () => {
  test("appendEllipses function should crop string at length argument and append 3 trailing periods", () => {
    const string =
      "This string will be cropped at 30 characters or at a different number if provided second argument length with three trailing dots";
    const length = 3;
    expect(appendEllipses(string, length)).toBe("Thi" + "...");
  });
});
