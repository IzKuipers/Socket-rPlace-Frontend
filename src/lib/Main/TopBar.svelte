<script lang="ts">
  import logo from "../../assets/logo-transparent.png";
  import { Clients, Players, UserCoins } from "../../ts/env";
  import CoinCounter from "./TopBar/CoinCounter.svelte";
  import LevelCounter from "./TopBar/LevelCounter.svelte";
  import ShopButton from "./TopBar/ShopButton.svelte";
  import UserMenu from "./TopBar/UserMenu.svelte";
</script>

<div class="topbar">
  <img class="logo" alt="Logo" src={logo} />
  <div class="right">
    <ShopButton />
    <CoinCounter />
    <LevelCounter />
    <UserMenu />
  </div>
</div>
