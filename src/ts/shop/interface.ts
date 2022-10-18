export interface ShopItem {
  title: string;
  description: string;
  icon: string;
  price: number;
  tag: string;
  cat?: Cat;
}

export interface Cat {
  tag: string;
  icon: string;
  name: string;
}
