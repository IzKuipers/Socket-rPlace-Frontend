<script lang="ts">
  import { UserData } from "../../ts/env";

  import type { DotColor } from "../../ts/user/interface";

  export let color: DotColor = null;
</script>

<div
  class="dot"
  style="background:var(--clr-{color || $UserData.color}-dot);"
/>

<style scoped>
  .dot {
    width: 10px;
    height: 10px;
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
  }
</style>
