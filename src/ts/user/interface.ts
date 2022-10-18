export interface User {
  online: boolean;
  name: string;
  color: DotColor;
  coins: number;
  radius: number;
  purchases: string[];
  genamnt: number;
  genspeed: number;
}
export type DotColor = "red" | "green" | "orange" | "yellow" | "blue" | "aqua";
