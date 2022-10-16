<script lang="ts">
  import { onMount } from "svelte";
  import { UserCoins, UserData } from "../../ts/env";

  let oldCoins = -1;
  let coins = 0;
  let diff = "";
  let show = false;
  let timeout: any;

  onMount(() => {
    oldCoins = $UserData.coins;
    coins = oldCoins;
  });

  UserCoins.subscribe((v) => {
    clearTimeout(timeout);
    coins = v;

    show = coins > oldCoins && oldCoins != -1;

    if (oldCoins == -1) oldCoins = coins;

    diff = `${coins - oldCoins}`;

    timeout = setTimeout(() => {
      show = false;
      oldCoins = coins;
    }, 1500);
  });
</script>

<div class="coinnotifier" class:show>
  <span class="material-icons">payments</span>+ {diff} munten
</div>
