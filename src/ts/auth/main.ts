import SocketIO from "socket.io-client";
import { get } from "svelte/store";
import { registerListeners } from "../api/listen/main";
import type { User } from "../user/interface";
import { join } from "../user/main";
import { connectionErrored, LoggedIn, sockIO, UserData } from "./../env";
import type { ConnectCb } from "./interface";

export const SERVER_PORT = 3190;

export async function connect(server: string, cb: ConnectCb) {
  console.log(
    `auth: connect: Establishing connection to ${server}:${SERVER_PORT}...`
  );

  const sock = SocketIO(`${server}:${SERVER_PORT}`);

  sockIO.set(sock);

  sock.on("connect_error", () => {
    if (get(LoggedIn)) connectionErrored.set(true);
    else disconnect();
  });
  sock.on("server-connected", () => {
    registerListeners(sock);
    console.log(`auth: connect:  -> Server '${server}' now connected.`);
    localStorage.setItem("rp-server", btoa(server));

    cb(sock, sock.id);
  });
}

export function disconnect() {
  sockIO.set(null);
  UserData.set(null);
  LoggedIn.set(false);
}

export function loginFromLS() {
  console.log("auth: loginFromLS: Logging in using LocalStorage data...");

  const serverB64 = localStorage.getItem("rp-server");
  const nicknmB64 = localStorage.getItem("rp-nick");

  if (!serverB64 || !nicknmB64) {
    console.log(
      "auth: loginFromLS:  -> Can't log in: missing server and/or nickname"
    );
    return;
  }

  const nickname = atob(nicknmB64);
  const server = atob(serverB64);

  connect(server, () => {
    join(nickname);
  });
}
