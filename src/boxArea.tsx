import { multiplication } from "./multiplication";
import { addition } from "./addition";

export function boxArea(length: number, width: number, height: number): number {
  const area1 = multiplication(length, width);
  const area2 = multiplication(2 * addition([length, width]), height);
  return addition([2 * area1, area2]);
}
