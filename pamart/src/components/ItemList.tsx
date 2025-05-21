import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import type { PartyItem } from "../types";

// Novo tipo para selectedItems com quantity
type SelectedItemWithQuantity = {
  item: PartyItem;
  quantity: number;
};

interface ItemListProps {
  items: PartyItem[];
  selectedItems: SelectedItemWithQuantity[];
  onRemove: (itemId: number) => void;
  onAdd: (item: PartyItem) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  selectedItems,
  onRemove,
  onAdd,
}) => {
  return (
    <Grid
      container
      spacing={{ xs: 1.2, sm: 2, md: 3 }}
      sx={{
        px: { xs: 0.5, sm: 2, md: 4 },
        py: { xs: 1, sm: 2 },
        width: "100%",
        margin: 0,
      }}
    >
      {items.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} sx={{ display: "flex" }}>
          <ItemCard
            item={item}
            selectedItems={selectedItems}
            onRemove={onRemove}
            onAdd={onAdd}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;