<script lang="ts">
  import { ShopPage, sockIO } from "../../../ts/env";
  import type { Cat, ShopItem } from "../../../ts/shop/interface";
  import ShopItemDisplay from "../ShopItemDisplay.svelte";

  let catItems: ShopItem[] = [];
  let render = false;

  ShopPage.subscribe((v) => {
    render = false;
    catItems = [];

    $sockIO.emit("getshopitems", (i: ShopItem[]) => {
      for (let j = 0; j < i.length; j++) {
        if (i[j].cat.tag == v.tag) {
          catItems.push(i[j]);
        }
      }

      render = true;
    });
  });
</script>

<div class="content">
  {#if $ShopPage && render}
    <h3 class="title">{catItems.length ? $ShopPage.name : "Welcome!"}</h3>

    {#each catItems as item}
      <ShopItemDisplay {item} />
    {/each}
  {:else}
    <h3 class="title">Welcome to the shop!</h3>
    <p>
      From here you can upgrade your gear. Select a category from the sidebar to
      see available items.
    </p>
  {/if}
</div>
