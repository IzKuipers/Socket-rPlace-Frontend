import type { Socket } from "socket.io-client";
import { writable, type Writable } from "svelte/store";
import type { User } from "./user/interface";

export const LoggedIn: Writable<boolean> = writable<boolean>(false);
export const UserData: Writable<User> = writable<User>(null);
export const sockIO: Writable<Socket> = writable<Socket>(null);
