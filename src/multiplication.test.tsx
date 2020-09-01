import { multiplication } from "./multiplication";
test("Test Multiplication Function", () => {
  expect(multiplication(1, 2)).toBe(2);
  expect(multiplication(2, 4)).toBe(8);
});
