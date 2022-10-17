import type { Cell, Grid } from "../../grid/interface";
import { updateGridWith } from "../../grid/main";
import type { User } from "../../user/interface";
import { Clients, Players, PlayGrid, UserCoins, UserData } from "./../../env";
import type { ListenerFunction, ListenerStore } from "./interface";

export const listenStore: ListenerStore = new Map<string, ListenerFunction>([
  [
    "update-user",
    (user: User) => {
      UserData.set(user);
    },
  ],
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
  [
    "update-grid-partial",
    (cells: Cell[]) => {
      updateGridWith(cells);
    },
  ],
]);
