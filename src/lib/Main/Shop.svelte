<script lang="ts">
  import { onMount } from "svelte";
  import { showShop, sockIO } from "../../ts/env";

  import type { ShopItem } from "../../ts/shop/interface";
  import ShopItemDisplay from "./ShopItemDisplay.svelte";

  let items: ShopItem[] = [];

  onMount(() => {
    $sockIO.emit("getshopitems", (i: ShopItem[]) => {
      items = i;
    });
  });
</script>

<div class="shopbg" class:show={$showShop} />
<div class="ca shop" class:show={$showShop}>
  <h2 class="title">Winkel</h2>
  {#each items as item}
    <ShopItemDisplay {item} />
  {/each}
</div>
