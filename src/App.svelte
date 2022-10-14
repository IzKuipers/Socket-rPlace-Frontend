<script lang="ts">
  import "./css/main.css";
  import Login from "./lib/Login.svelte";
  import Main from "./lib/Main.svelte";
  import { LoggedIn } from "./ts/env";
</script>

<div class="app">
  {#if $LoggedIn}
    <Main />
  {:else}
    <Login />
  {/if}
</div>
