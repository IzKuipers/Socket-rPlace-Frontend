import { ShopPage } from "../env";
import type { Cat } from "./interface";

export function changeShopPage(cat: Cat) {
  ShopPage.set(cat);
}
