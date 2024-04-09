import { get } from "svelte/store";
import { PlayGrid } from "./../env";
import type { Cell } from "./interface";

export function updateGridWith(cells: Cell[]) {
  console.log(
    `grid/main.ts: updateGridWith: updating ${cells.length} positions...`
  );
  const grid = get(PlayGrid);
  for (let j = 0; j < cells.length; j++) {
    let exist = false;

    for (let i = 0; i < grid.length; i++) {
      if (grid[i].x == cells[j].x && grid[i].y == cells[j].y) {
        grid[i] = cells[j];
        exist = true;
      }
    }

    if (!exist) grid.push(cells[j]);
  }

  PlayGrid.set(grid);
}
