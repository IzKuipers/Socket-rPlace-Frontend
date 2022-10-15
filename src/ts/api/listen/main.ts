import type { Socket } from "socket.io-client";
import { get } from "svelte/store";
import { sockIO } from "../../env";
import { listenStore } from "./store";

export async function registerListeners(sock?: Socket) {
  const socket = sock || get(sockIO);
  console.log(
    `api/listen: registerListeners: registering client-side listeners for socket ${socket.id}`
  );

  for (const listener of listenStore) {
    socket.on(listener[0], listener[1]);
  }
}
