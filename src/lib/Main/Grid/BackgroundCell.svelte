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
  let price = 0;

  function highlight() {
    price = 0;

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

    let newPrice = 25 * grid.length - subtract;

    price = newPrice;

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
  on:mouseleave={() => (price = 0)}
  on:click={place}
  class:highlighted
>
  {price == 0 ? " " : price < 0 ? "0!" : price}
</div>
