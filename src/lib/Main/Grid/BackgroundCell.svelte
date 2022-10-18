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
  let price = "";

  function highlight() {
    const grid = generateStar({ x, y }).grid;
    const field = $PlayGrid;

    let subtract = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < field.length; j++) {
        if (grid[i].x == field[j].x && grid[i].y == field[j].y) {
          if (field[j].c == $UserData.color) subtract += 25;
          else {
            subtract += 50;
          }
        }
      }
    }

    price = `${25 * grid.length - subtract}`;

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

  function clear() {
    price = "";
  }
</script>

<div
  class="cell bg"
  id="{x}x{y}"
  on:mouseenter={highlight}
  on:mouseleave={clear}
  on:click={place}
  class:highlighted
>
  {price}
</div>
