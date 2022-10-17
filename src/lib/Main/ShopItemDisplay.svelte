<script lang="ts">
  import { onMount } from "svelte";

  import { sockIO, UserCoins, UserData } from "../../ts/env";
  import type { ShopItem } from "../../ts/shop/interface";

  export let item: ShopItem;

  let purchased = false;
  let cantafford = false;

  function update() {
    purchased = $UserData.purchases.includes(item.tag);
    cantafford = $UserCoins <= item.price;
  }

  onMount(update);

  UserData.subscribe((v) => {
    if (v) update();
  });

  UserCoins.subscribe(update);

  function buy() {
    $sockIO.emit("purchase", $UserData.name, item.tag);
  }
</script>

<div class="shopItem">
  <h1 class="title">
    <span class="material-icons">{item.icon}</span>{item.title}
  </h1>
  <p class="description">{item.description}</p>
  <p class="price"><span class="material-icons">payments</span> {item.price}</p>
  <button
    class="purchase"
    disabled={purchased || cantafford}
    class:clr-green={!purchased && !cantafford}
    class:clr-red={cantafford && !purchased}
    on:click={buy}
  >
    {purchased ? "Gekocht" : cantafford ? "Te duur!" : "Kopen"}
  </button>
</div>
