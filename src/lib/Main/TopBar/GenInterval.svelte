<script lang="ts">
  import { UserData } from "../../../ts/env";
</script>

<div class="geninterval">
  <span class="material-icons">speed</span>
  <p class="int">{$UserData.genspeed / 1000} sec</p>
</div>

<div class="geninterval">
  <span class="material-icons">spoke</span>
  <p class="int">
    {$UserData.radius == 1 ? 1 : $UserData.radius * 2 - 1} cells
  </p>
</div>
