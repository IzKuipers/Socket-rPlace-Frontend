<script lang="ts">
  import { ShopPage } from "../../../../ts/env";

  import type { Cat } from "../../../../ts/shop/interface";
  import { changeShopPage } from "../../../../ts/shop/page";

  export let cat: Cat;

  function go() {
    changeShopPage(cat);
  }
</script>

<button class="page full" on:click={go} class:selected={$ShopPage == cat}>
  <span class="material-icons">{cat.icon}</span>{cat.name}
</button>
