export interface PartyItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface SelectedItem {
  item: PartyItem;
  quantity: number;
}