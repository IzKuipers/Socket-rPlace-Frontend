<script lang="ts">
  import { onMount } from "svelte";
  import { showShop, sockIO } from "../../ts/env";

  import type { Cat, ShopItem } from "../../ts/shop/interface";
  import Content from "./Shop/Content.svelte";
  import Sidebar from "./Shop/Sidebar.svelte";

  let items: ShopItem[] = [];
  let cats: Cat[] = [];

  onMount(() => {
    $sockIO.emit("getshopitems", (i: ShopItem[]) => {
      items = i;

      const tags: string[] = [];

      for (let j = 0; j < i.length; j++) {
        if (i[j].cat && !tags.includes(i[j].cat.tag)) {
          tags.push(i[j].cat.tag);
          cats.push(i[j].cat);
        }
      }
    });
  });
</script>

<div class="shopbg" class:show={$showShop} />
<div class="ca shop" class:show={$showShop}>
  {#if cats.length && items.length}
    <Sidebar {cats} />
    <Content />
  {/if}
</div>
