<script lang="ts">
  import logo from "../../assets/logo-transparent.png";
  import CoinCounter from "./TopBar/CoinCounter.svelte";
  import LevelCounter from "./TopBar/LevelCounter.svelte";
  import ShopButton from "./TopBar/ShopButton.svelte";
  import UserMenu from "./TopBar/UserMenu.svelte";
  import GenInterval from "./TopBar/GenInterval.svelte";
  import { sockIO, UserData } from "../../ts/env";
  import type { DotColor } from "../../ts/user/interface";

  let clrStr = "";

  function apply() {
    $sockIO.emit("setclr", $UserData.name, clrStr);
    $UserData.color = clrStr as DotColor;
  }
</script>

<div class="topbar">
  <img class="logo" alt="Logo" src={logo} />
  <input placeholder="e.g. red" bind:value={clrStr} />
  <button on:click={apply}>Apply</button>
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
