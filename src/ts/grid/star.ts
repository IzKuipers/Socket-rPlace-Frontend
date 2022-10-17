import { CELL_COST } from "./../env";
import { GRID_HEIGHT, GRID_WIDTH } from "../env";
import type { Position } from "./interface";

export type starReturn = { grid: Position[]; price: number };

export function generateStar(pos: Position, rad: number = 2) {
  let g: Position[] = [];
  let price = 0;

  let l = rad;

  for (let yM = 0; yM < rad; yM++) {
    for (let xM = 0; xM < l; xM++) {
      g = addToG(g, { x: pos.x - xM, y: pos.y + yM });
      g = addToG(g, { x: pos.x + xM, y: pos.y + yM });
      g = addToG(g, { x: pos.x - xM, y: pos.y - yM });
      g = addToG(g, { x: pos.x + xM, y: pos.y - yM });
    }

    l -= 1;
  }

  for (let i = 0; i < g.length; i++) {
    if (
      g[i].x > -1 &&
      g[i].y > -1 &&
      g[i].x <= GRID_WIDTH &&
      g[i].y <= GRID_HEIGHT
    ) {
      price += CELL_COST;
    }
  }

  return { grid: g, price };
}

function addToG(g: Position[], i: Position) {
  for (let j = 0; j < g.length; j++) {
    if (g[j].x == i.x && g[j].y == i.y) return g;
  }

  g.push(i);

  return g;
}
