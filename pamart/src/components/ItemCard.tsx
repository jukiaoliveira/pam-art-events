import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import type { PartyItem, SelectedItem } from "../types";

interface ItemCardProps {
  item: PartyItem;
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, setSelectedItems }) => {
  const handleAdd = () => {
    setSelectedItems((prev) => [
      ...prev,
      { item, quantity: 1 },
    ]);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6">R$ {item.price.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Adicionar ao orçamento
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
