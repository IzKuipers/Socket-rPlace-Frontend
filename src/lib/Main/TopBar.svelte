<script lang="ts">
  import logo from "../../assets/logo-transparent.png";
  import { Clients, Players, UserCoins } from "../../ts/env";
</script>

<div class="topbar">
  <img class="logo" alt="Logo" src={logo} />
  <br /><br /><br /><br />
  {#each $Players as player}
    {player.name},
  {/each}
  <br /><br />
  {$UserCoins}
  <br /><br />
  {#each $Clients as client}
    {client},
  {/each}
  <br /><br />
</div>
