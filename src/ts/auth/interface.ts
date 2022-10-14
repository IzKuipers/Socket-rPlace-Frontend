import type { Socket } from "socket.io-client";
import type { User } from "../user/interface";
export type ConnectCb = (socket: Socket, id: string) => void;
export type JoinCb = (user: User, coins: number) => void;
