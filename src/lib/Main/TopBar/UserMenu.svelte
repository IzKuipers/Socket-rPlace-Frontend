<script lang="ts">
  import { UserData } from "../../../ts/env";
  import ColorDot from "../../User/ColorDot.svelte";
</script>

<button class="userbutton">
  <ColorDot />
  <p class="name">{$UserData.name}</p>
</button>
