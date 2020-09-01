import { palindrome } from "./palindrome";
test("Test Palindrome Function", () => {
  expect(palindrome("kayak")).toBe(true);
  expect(palindrome("hfghfhj")).toBe(false);
});
