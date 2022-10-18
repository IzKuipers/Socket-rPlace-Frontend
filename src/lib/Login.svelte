<script lang="ts">
  import { connect, loginFromLS } from "../ts/auth/main";

  import logo from "../assets/logo-transparent.png";
  import { join } from "../ts/user/main";
  import { onMount } from "svelte";

  let server: string;
  let nicknm: string;

  function doLogin() {
    connect(server, () => {
      join(nicknm);
    });
  }

  onMount(loginFromLS);
</script>

<div class="login-bg" />
<div class="ca login">
  <div class="logo-wrapper">
    <img src={logo} alt="Logo" class="logo" />
  </div>
  <h2>Login</h2>
  <p>Who are you and where do you dare to go?</p>
  <input placeholder="Server Name" class="full" bind:value={server} />
  <input
    placeholder="Nickname"
    class="full"
    bind:value={nicknm}
    disabled={!server}
  />
  <button
    class="full suggested"
    disabled={!nicknm || !server}
    on:click={doLogin}
  >
    Play
    <span class="material-icons right">rocket_launch</span>
  </button>
</div>
