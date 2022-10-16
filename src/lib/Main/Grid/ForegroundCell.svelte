<script lang="ts">
  import { PlayGrid } from "../../../ts/env";
  import type { DotColor } from "../../../ts/user/interface";

  export let x: number;
  export let y: number;

  let color: DotColor;

  let highlighted = false;

  PlayGrid.subscribe((v) => {
    for (let i = 0; i < v.length; i++) {
      if (v[i].x == x && v[i].y == y) {
        highlighted = true;
        color = v[i].c as DotColor;
      }
    }
  });
</script>

<div
  class="cell"
  id="fg-{x}x{y}"
  class:highlighted
  style="background: var(--clr-{highlighted ? color : 'none'}-dot);"
/>
