import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import type { PartyItem, SelectedItem } from "../types";

interface ItemListProps {
  items: PartyItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
  selectedItems: SelectedItem[];
  onRemove: (itemId: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, setSelectedItems, selectedItems, onRemove }) => {
  return (
    <Grid container spacing={2} sx={{ padding: "0 16px" }}>
      {items.map((item) => (
        <Grid size={{xs:12, sm:6, md:4 }} key={item.id}>
          <ItemCard
            item={item}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
            onRemove={onRemove}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;