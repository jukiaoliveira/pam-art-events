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
      elevation={6}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: { xs: "100%", sm: 345 },
        m: "auto",
        borderRadius: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        minHeight: 440, // aumento pra caber botão remover
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          aspectRatio: "1 / 1",
          width: "100%",
          height: { xs: 160, sm: 200 },
          overflow: "hidden",
          borderRadius: "12px 12px 0 0",
          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "inset 0 0 15px #e0e0e0",
        }}
      >
        <CardMedia
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: "90%",
            height: "90%",
            objectFit: "contain",
            borderRadius: 2,
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          }}
        />
      </Box>
      <CardContent sx={{ px: { xs: 2, sm: 3 }, py: 3, flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.2rem", sm: "1.4rem" },
            color: "#222",
            textTransform: "capitalize",
            letterSpacing: 0.5,
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem" },
            color: "#666",
            minHeight: 48,
            lineHeight: 1.4,
          }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            mt: 1,
            color: "#ff4da6", // rosa da paleta da cliente
          }}
        >
          R$ {item.price.toFixed(2)}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          flexWrap="wrap" // permite quebrar linha se necessário no mobile
          gap={1}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(item)}
            sx={{
              minWidth: { xs: 90, sm: 140 },
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.25 },
              borderRadius: 2,
              backgroundColor: "#ff4da6",
              "&:hover": {
                backgroundColor: "#cc3a87",
              },
              boxShadow: "none",
              textTransform: "none",
              flexGrow: 1, // para botar full width no mobile
              maxWidth: { xs: "100%", sm: "auto" },
            }}
          >
            Adicionar
          </Button>
          {quantity > 0 && (
            <>
              <Typography
                sx={{
                  mx: 2,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  fontWeight: 600,
                  color: "#444",
                  minWidth: 48,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                Qtd: {quantity}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => onRemove(item.id)}
                sx={{
                  minWidth: { xs: 100, sm: 130 },
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  px: { xs: 2, sm: 3 },
                  py: { xs: 0.8, sm: 1.1 },
                  borderRadius: 2,
                  borderColor: "#ff4da6",
                  color: "#ff4da6",
                  "&:hover": {
                    borderColor: "#cc3a87",
                    backgroundColor: "rgba(255, 77, 166, 0.1)",
                  },
                  textTransform: "none",
                  flexGrow: 1,
                  maxWidth: { xs: "100%", sm: "auto" },
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
