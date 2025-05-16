import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import type { PartyItem, SelectedItem } from "../types";

interface ItemCardProps {
  item: PartyItem;
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
  selectedItems: SelectedItem[];
  onRemove: (itemId: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, setSelectedItems, selectedItems, onRemove }) => {
  const handleAdd = () => {
    setSelectedItems((prev) => [
      ...prev,
      { item, quantity: 1 },
    ]);
  };

  const isSelected = selectedItems.some((selected) => selected.item.id === item.id);

  return (
    <Card
      sx={{
        backgroundColor: "#FFFFFF", // Fundo branco
        maxWidth: 345,
        margin: "auto",
        borderRadius: 2,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          R$ {item.price.toFixed(2)}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          {!isSelected ? (
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Adicionar
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onRemove(item.id)}
            >
              Remover
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;