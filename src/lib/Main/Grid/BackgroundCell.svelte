<script lang="ts">
  import { abbreviateNumber } from "js-abbreviation-number";

  import {
    bgGrid,
    GRID_HEIGHT,
    GRID_WIDTH,
    PlayGrid,
    sockIO,
    UserData,
  } from "../../../ts/env";
  import { generateStar } from "../../../ts/grid/star";

  export let x = 0;
  export let y = 0;

  let highlighted = false;

  function highlight() {
    const grid = generateStar({ x, y }).grid;

    bgGrid.set(grid);
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
      (_: boolean, __: string) => {},
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
