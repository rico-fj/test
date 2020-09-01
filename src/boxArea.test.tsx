import { boxArea } from "./boxArea";
test("Test BoxArea Function", () => {
  // boxArea(length, width, height)
  expect(boxArea(1, 2, 3)).toBe(22);
  expect(boxArea(2, 4, 6)).toBe(88);
});
