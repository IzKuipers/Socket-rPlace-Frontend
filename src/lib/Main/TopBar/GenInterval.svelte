<script lang="ts">
  import { onMount } from "svelte";

  import { sockIO } from "../../../ts/env";

  let int = "";
  onMount(() => {
    $sockIO.emit("getgenint", (i: number) => {
      int = `${i / 1000}s`;
    });
  });
</script>

<div class="geninterval">
  <span class="material-icons">speed</span>
  <p class="int">{int}</p>
</div>
