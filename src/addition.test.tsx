import { addition } from "./addition";
test("Test Addition Function", () => {
  expect(addition([1, 2])).toBe(3);
  expect(addition([2, 4])).toBe(6);
});
