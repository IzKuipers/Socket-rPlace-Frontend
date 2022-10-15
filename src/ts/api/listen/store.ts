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
      for (let i = 0; i < players.length; i++)
        console.log(players[i].name, players[i].coins);
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
