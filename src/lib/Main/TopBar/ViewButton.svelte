<script lang="ts">
  import { smallView } from "../../../ts/env";

  function click() {
    $smallView = !$smallView;
  }
</script>

<button class="shopbutton material-icons hover-clr-purple" on:click={click}>
  {$smallView ? "zoom_in" : "zoom_out"}
</button>
