import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import type { PartyItem } from "../types";

type SelectedItemWithQuantity = {
  item: PartyItem;
  quantity: number;
};

interface ItemCardProps {
  item: PartyItem;
  selectedItems: SelectedItemWithQuantity[];
  onRemove: (itemId: number) => void;
  onAdd: (item: PartyItem) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  selectedItems,
  onRemove,
  onAdd,
}) => {
  const selected = selectedItems.find((selected) => selected.item.id === item.id);
  const quantity = selected?.quantity ?? 0;

  return (
    <Card
      sx={{
        backgroundColor: "#F7E9E4",
        width: "100%", // ocupa 100% do grid no mobile!
        maxWidth: { xs: "100%", sm: 345 },
        m: "auto",
        borderRadius: 2,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        mb: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          aspectRatio: "1 / 1",
          width: "100%",
          height: { xs: 140, sm: 180 },
          mt: 2,
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "#f6f6f6",
        }}
      >
        <CardMedia
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain", 
            backgroundColor: "#fff", 
          }}
        />
      </Box>
      <CardContent sx={{ px: { xs: 1, sm: 2 }, py: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}>
          {item.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: "1.05rem", sm: "1.2rem" } }}>
          R$ {item.price.toFixed(2)}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(item)}
            sx={{
              minWidth: { xs: 80, sm: 120 },
              fontSize: { xs: "0.85rem", sm: "1rem" },
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
            }}
          >
            Adicionar
          </Button>
          {quantity > 0 && (
            <>
              <Typography sx={{ mx: 2, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                Qtd: {quantity}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => onRemove(item.id)}
                sx={{
                  minWidth: { xs: 70, sm: 100 },
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                }}
              >
                Remover
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;