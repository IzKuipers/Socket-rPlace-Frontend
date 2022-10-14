<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";
  import { onMount } from "svelte";

  import type { User } from "../../../ts/user/interface";
  export let player: User;

  let coinStr = "";

  onMount(() => {
    coinStr = abbreviateNumber(player.coins, 0).toLowerCase();
  });
</script>

<div class="player">
  <div class="dot" style="background: var(--clr-{player.color}-fg);" />
  <p class="name">{player.name}</p>
  <p class="coins">{coinStr}</p>
</div>
