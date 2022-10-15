<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";
  import { onMount } from "svelte";
  import { Players, UserCoins } from "../../../ts/env";

  import type { User } from "../../../ts/user/interface";
  import ColorDot from "../../User/ColorDot.svelte";
  export let player: User;
  export let own: boolean;

  let coinStr = "";

  onMount(() => {
    coinStr = abbr(player.coins);
  });

  UserCoins.subscribe((v) => {
    if (own) coinStr = abbr(v);
  });

  Players.subscribe((v) => {
    for (let i = 0; i < v.length; i++) {
      if (v[i].name == player.name) coinStr = abbr(v[i].coins);
    }
  });

  function abbr(v) {
    return abbreviateNumber(v, 0).toLowerCase();
  }
</script>

<div class="player">
  <ColorDot color={player.color} />
  <p class="name">{player.name}</p>
  <p class="coins">{coinStr}</p>
</div>
