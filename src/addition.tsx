export function addition(props: number[]): number {
  let total = 0;
  props.map((n) => (total += n));
  return total;
}
