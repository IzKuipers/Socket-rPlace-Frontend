<script lang="ts">
  import { connectionErrored } from "../ts/env";
</script>

<div class="connect-err-bg" class:show={$connectionErrored} />
<div class="ca connecterror" class:show={$connectionErrored}>
  <span class="material-icons">wifi_tethering_error</span>
  <h1>Ah shit... Connection Lost!</h1>
  <p>
    The connection to the server was lost. Please check your internet
    connection, and then try reloading. If you see the login screen after
    reloading, don't try to log back in, because the server probably crashed.
  </p>
</div>
