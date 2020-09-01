import { palindrome } from "../palindrome";
test("Palindrome", () => {
  expect(palindrome("kayak")).toBe(true);
  expect(palindrome("hfghfh")).toBe(false);
});
