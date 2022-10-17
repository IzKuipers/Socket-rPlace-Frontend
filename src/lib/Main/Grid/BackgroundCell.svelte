<script lang="ts">
  import {
    bgGrid,
    GRID_HEIGHT,
    GRID_WIDTH,
    sockIO,
    UserData,
  } from "../../../ts/env";
  import type { Position } from "../../../ts/grid/interface";
  import { generateStar } from "../../../ts/grid/star";

  export let x = 0;
  export let y = 0;

  let highlighted = false;

  function highlight() {
    bgGrid.set(generateStar({ x, y }).grid);
  }

  bgGrid.subscribe((v) => {
    highlighted = false;

    for (let i = 0; i < v.length; i++) {
      const h = v[i].x == x && v[i].y == y;

      if (h) {
        highlighted = h;
        return;
      }
    }
  });

  function place() {
    $sockIO.emit(
      "placeMult",
      $UserData.name,
      (v: boolean, msg: string) => {
        console.log(v, msg);
      },
      $bgGrid
    );
  }
</script>

<div
  class="cell bg"
  id="{x}x{y}"
  on:mouseenter={highlight}
  on:click={place}
  class:highlighted
/>
