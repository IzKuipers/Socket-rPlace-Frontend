export interface User {
  online: boolean;
  name: string;
  color: DotColor;
  coins: number;
}
export type DotColor = "red" | "green" | "orange" | "yellow" | "blue" | "aqua";
