<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";

  import { UserCoins } from "../../../ts/env";

  let formatted = "";
  let level = 0;

  UserCoins.subscribe((v) => {
    level = Math.floor(v / 100);
    formatted = abbreviateNumber(level, 2);
  });
</script>

<div class="levelcounter" title={level.toString()}>
  <span class="material-icons">assessment</span>
  <p class="count">{level}</p>
</div>
