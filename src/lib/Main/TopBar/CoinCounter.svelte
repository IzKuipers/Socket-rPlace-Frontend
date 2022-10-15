<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";

  import { UserCoins } from "../../../ts/env";

  let formatted = "";
  let coins = 0;

  UserCoins.subscribe((v) => {
    coins = v;
    formatted = abbreviateNumber(v, 2);
  });
</script>

<div class="coincounter" title={coins.toString()}>
  <span class="material-icons">payments</span>
  <p class="count">{formatted}</p>
</div>
