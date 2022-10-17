export interface User {
  online: boolean;
  name: string;
  color: DotColor;
  coins: number;
  radius: number;
  purchases: string[];
}
export type DotColor = "red" | "green" | "orange" | "yellow" | "blue" | "aqua";
