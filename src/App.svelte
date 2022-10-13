<!--
  
  IMPORTANT NOTICE

  This is a TEST FILE. Used to test the backend, nothing else. UI implementation will begin once initial backend features have been added and tested.

  - Izaak Kuipers, Oct 10 2022

-->
<script lang="ts">
  import SocketIO from "socket.io-client";
  import type { Socket } from "socket.io-client";
  let connected = false;
  let userData = null;

  let username = "";
  let socket: Socket;
  let clients: any[] = [];
  let grid: any[] = [];
  let coins: number = 0;

  let x;
  let y;

  async function login() {
    socket = SocketIO("localhost:3190");

    socket.on("server-connected", (g, c) => {
      grid = g;
      coins = c;
      console.log("Connected!");
      socket.emit("join", username, (user) => {
        userData = user;
        connected = true;
        console.log(user);
      });
    });

    socket.on("connect_error", () => {
      disconnect();
    });

    socket.on("update-presence", (c) => {
      clients = c;
      console.log(c);
    });

    socket.on("update-grid", (g) => (grid = g));

    socket.on("update-coins", (c) => {
      coins = c;
    });
  }

  async function disconnect() {
    socket.disconnect();

    userData = null;
    connected = false;
  }

  async function place() {
    socket.emit("place", username, x, y, (v) => {
      if (!v) console.error("FAIL");
    });
  }
</script>

<h1>Login</h1>
{#if !connected}
  <input bind:value={username} placeholder="Username" />
  <button on:click={login}>Login</button>
{:else}
  <input type="number" placeholder="x" bind:value={x} />
  <input type="number" placeholder="y" bind:value={y} />
  <button on:click={place}>Place</button>
  <button on:click={disconnect}>Logout</button>
  <h3>Users</h3>
  {#each clients as client}
    <p>
      {client.name}: <span style="color: {client.color}">{client.color}</span>
    </p>
  {/each}
  <h3>Grid</h3>
  {#each grid as cell}
    <p>
      {cell.x}x{cell.y}: <span style="color: {cell.c}">{cell.c}</span>
    </p>
  {/each}
{/if}
