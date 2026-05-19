import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { PartyItem } from "../types";

type SelectedItemWithQuantity = {
  item: PartyItem;
  quantity: number;
};

interface ItemListProps {
  items: PartyItem[];
  selectedItems: SelectedItemWithQuantity[];
  onAdd: (item: PartyItem) => void;
  onRemove: (itemId: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  selectedItems,
  onAdd,
  onRemove,
}) => {
  const getQuantity = (itemId: number) => {
    const found = selectedItems.find((s) => s.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 4,
        maxWidth: 1200,
        mx: "auto",
        py: 2,
      }}
    >
      {items.map((item) => {
        const quantity = getQuantity(item.id);
        const isSelected = quantity > 0;

        return (
          <Box
            key={item.id}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #eee",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                boxShadow: "0px 10px 25px rgba(0,0,0,0.03)",
                borderColor: "#b8b8b8",
              },
            }}
          >
            {/* Imagem Proporcional e Quadrada (Estilo Catálogo) */}
            <Box
              sx={{
                width: "100%",
                pt: "100%", // Força a proporção 1:1 (quadrado perfeito)
                position: "relative",
                backgroundColor: "#f9f9f9",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
            </Box>

            {/* Informações do Item */}
            <Box
              sx={{
                p: 3,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "serif",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    mb: 0.5,
                    color: "#1a1a1a",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", mb: 3, lineHeight: 1.5 }}
                >
                  {item.description}
                </Typography>
              </Box>

              {/* Botão de Controle Minimalista */}
              <Box sx={{ mt: "auto" }}>
                {!isSelected ? (
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => onAdd(item)}
                    sx={{
                      borderRadius: 0,
                      borderColor: "#000",
                      color: "#000",
                      fontWeight: 600,
                      py: 1.2,
                      letterSpacing: 1,
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                        borderColor: "#000",
                      },
                    }}
                  >
                    Adicionar ao Visual
                  </Button>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid #FF69B4",
                      backgroundColor: "rgba(255, 105, 180, 0.02)",
                      p: 0.5,
                    }}
                  >
                    <IconButton
                      onClick={() => onRemove(item.id)}
                      sx={{ color: "#FF69B4", borderRadius: 0 }}
                    >
                      <RemoveIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#FF69B4",
                        fontSize: "1.1rem",
                      }}
                    >
                      {quantity}
                    </Typography>
                    <IconButton
                      onClick={() => onAdd(item)}
                      sx={{ color: "#FF69B4", borderRadius: 0 }}
                    >
                      <AddIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ItemList;
