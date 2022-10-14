import SocketIO from "socket.io-client";
import { sockIO, UserData } from "./../env";

export async function connect(server: string) {
  const sock = SocketIO(server);
  sockIO.set(sock);

  sock.on("connect-error", disconnect);
}

export function disconnect() {
  sockIO.set(null);
  UserData.set(null);
}
