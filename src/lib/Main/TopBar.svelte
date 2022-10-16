<script lang="ts">
  import logo from "../../assets/logo-transparent.png";
  import CoinCounter from "./TopBar/CoinCounter.svelte";
  import LevelCounter from "./TopBar/LevelCounter.svelte";
  import ShopButton from "./TopBar/ShopButton.svelte";
  import UserMenu from "./TopBar/UserMenu.svelte";
  import GenInterval from "./TopBar/GenInterval.svelte";
</script>

<div class="topbar">
  <img class="logo" alt="Logo" src={logo} />
  <div class="right">
    <ShopButton />
    <div class="sep" />
    <CoinCounter />
    <GenInterval />
    <LevelCounter />
    <div class="sep" />
    <UserMenu />
  </div>
</div>
