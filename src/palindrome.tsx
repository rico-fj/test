export function palindrome(n: string): boolean {
  for (var i = 0; i < Math.floor(n.length / 2); i++) {
    if (n[i] !== n[n.length - i - 1]) {
      return false;
    }
  }
  return true;
}
