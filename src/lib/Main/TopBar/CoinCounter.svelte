<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";

  import { UserCoins } from "../../../ts/env";

  let formatted = "";
  let coins = 0;
  let level = 0;

  UserCoins.subscribe((v) => {
    coins = v;
    formatted = abbreviateNumber(v, 2);
    level = Math.floor(coins / 100);
  });
</script>

<div class="coincounter" title={coins.toString()}>
  <span class="material-icons">payments</span>
  <p class="count">{formatted}</p>
  <div class="sep" />
  <span class="material-icons">add</span>
  <p class="count">{coins > 500000 ? 10000 : 10 * (level || 1)}</p>
</div>
