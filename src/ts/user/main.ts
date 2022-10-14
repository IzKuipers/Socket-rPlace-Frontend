import { UserCoins } from "./../env";
import { get } from "svelte/store";
import type { JoinCb } from "../auth/interface";
import { LoggedIn, sockIO, UserData } from "../env";
import type { User } from "./interface";

export function join(username: string, cb: JoinCb = null): boolean {
  console.log(`user: join: Logging in using '${username}'`);
  const socket = get(sockIO);
  if (!socket) return false;

  socket.emit("join", username, (user: User, coins: number) => {
    if (user) {
      console.log(`user: join:  -> User '${username}' authorized.`);
      localStorage.setItem("rp-nick", btoa(username));
      UserData.set(user);
      LoggedIn.set(true);
      UserCoins.set(coins);
    } else {
      console.log(
        `user: join:  -> User '${username}' rejected. Is the server updated?`
      );
    }

    if (cb) cb(user, coins);
  });
}
