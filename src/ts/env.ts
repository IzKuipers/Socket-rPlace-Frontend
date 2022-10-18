import type { Socket } from "socket.io-client";
import { writable, type Writable } from "svelte/store";
import type { Grid, Position } from "./grid/interface";
import type { Cat } from "./shop/interface";
import type { User } from "./user/interface";

export const LoggedIn: Writable<boolean> = writable<boolean>(false);
export const showShop: Writable<boolean> = writable<boolean>(false);
export const UserData: Writable<User> = writable<User>(null);
export const sockIO: Writable<Socket> = writable<Socket>(null);
export const UserCoins: Writable<number> = writable<number>(0);
export const PlayGrid: Writable<Grid> = writable<Grid>([]);
export const Players: Writable<User[]> = writable<User[]>([]);
export const Clients: Writable<string[]> = writable<string[]>([]);
export const ShopPage: Writable<Cat> = writable<Cat>(null);
export const connectionErrored: Writable<boolean> = writable<boolean>(false);
export const bgGrid: Writable<Position[]> = writable<Position[]>([]);

export const GRID_WIDTH = 60;
export const GRID_HEIGHT = 42;
export const CELL_COST = 500;
