<script lang="ts">
  import logo from "../../assets/logo-transparent.png";
  import CoinCounter from "./TopBar/CoinCounter.svelte";
  import GenInterval from "./TopBar/GenInterval.svelte";
  import LevelCounter from "./TopBar/LevelCounter.svelte";
  import ShopButton from "./TopBar/ShopButton.svelte";
  import UserMenu from "./TopBar/UserMenu.svelte";
  import ViewButton from "./TopBar/ViewButton.svelte";
</script>

<div class="topbar">
  <img class="logo" alt="Logo" src={logo} />
  <div class="right">
    <CoinCounter />
    <GenInterval />
    <div class="sep" />
    <LevelCounter />
    <div class="sep" />
    <ViewButton />
    <ShopButton />
    <UserMenu />
  </div>
</div>
