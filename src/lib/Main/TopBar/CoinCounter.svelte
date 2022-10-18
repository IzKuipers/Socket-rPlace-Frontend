<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";

  import { UserCoins, UserData } from "../../../ts/env";

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
</div>
<div class="sep" />
<div class="coincounter">
  <span class="material-icons">add_circle</span>
  <p class="count">{$UserData.genamnt}</p>
</div>
<div class="sep" />
