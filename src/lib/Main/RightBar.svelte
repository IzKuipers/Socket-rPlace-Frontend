<script lang="ts">
  import { Players, UserData } from "../../ts/env";
  import Player from "./RightBar/Player.svelte";
</script>

<div class="rightbar">
  <h2 class="header">
    Players
    <span class="count">{$Players.length}</span>
  </h2>
  {#each $Players as player}
    <Player own={player.name == $UserData.name} {player} />
  {/each}
</div>
