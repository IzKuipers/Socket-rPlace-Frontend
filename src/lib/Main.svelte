<script lang="ts">
  import CoinNotifier from "./Main/CoinNotifier.svelte";
  import Grid from "./Main/Grid.svelte";
  import RightBar from "./Main/RightBar.svelte";
  import Shop from "./Main/Shop.svelte";

  import TopBar from "./Main/TopBar.svelte";
</script>

<div class="main-content">
  <TopBar />
  <RightBar />
  <Grid />
  <Shop />
  <CoinNotifier />
</div>
