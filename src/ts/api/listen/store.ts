import type { Grid } from "../../grid/interface";
import type { User } from "../../user/interface";
import { Clients, Players, PlayGrid, UserCoins } from "./../../env";
import type { ListenerFunction, ListenerStore } from "./interface";

export const listenStore: ListenerStore = new Map<string, ListenerFunction>([
  [
    "update-coins",
    (coins: number) => {
      UserCoins.set(coins);
    },
  ],
  [
    "update-grid",
    (grid: Grid) => {
      PlayGrid.set(grid);
    },
  ],
  [
    "update-presence",
    (players: User[]) => {
      Players.set(players);
    },
  ],
  [
    "clients-update",
    (clients: string[]) => {
      Clients.set(clients);
    },
  ],
]);
