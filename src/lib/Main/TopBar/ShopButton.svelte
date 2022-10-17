<script lang="ts">
  import { showShop } from "../../../ts/env";

  function toggle() {
    $showShop = !$showShop;
  }
</script>

<button
  class="material-icons shopbutton hover-clr-blue"
  class:clr-blue={$showShop}
  on:click={toggle}
>
  local_grocery_store
</button>
