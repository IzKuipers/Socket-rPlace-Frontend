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

<div class="ca login">
  <div class="logo-wrapper">
    <img src={logo} alt="Logo" class="logo" />
  </div>
  <h2>Inloggen</h2>
  <p>
    Hi! Wie ben jij en waar denk jij heen te gaan? Vul de gegevens in om te
    spelen.
  </p>
  <input placeholder="Server-naam" class="full" bind:value={server} />
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
    Spelen
    <span class="material-icons right">rocket_launch</span>
  </button>
  <button class="full secondary" disabled>Hulp nodig?</button>
</div>
