<script lang="ts">
  import type { Cat } from "../../../ts/shop/interface";
  import SidebarPage from "./Sidebar/SidebarPage.svelte";

  export let cats: Cat[];
</script>

<div class="sidebar">
  <h3 class="title">Shop</h3>
  {#each cats as cat}
    <SidebarPage {cat} />
  {/each}
</div>
