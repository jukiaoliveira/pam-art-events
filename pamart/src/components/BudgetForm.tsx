import React from "react";
import { Box, Typography, Button } from "@mui/material";
import type { SelectedItem } from "../types";

interface BudgetFormProps {
  selectedItems: SelectedItem[];
}

const BudgetForm: React.FC<BudgetFormProps> = ({ selectedItems }) => {
  const total = selectedItems.reduce(
    (sum, selected) => sum + selected.item.price * selected.quantity,
    0
  );

  const handleSendToWhatsApp = () => {
    const message = selectedItems
      .map(
        (selected) =>
          `Item: ${selected.item.name}, Quantidade: ${selected.quantity}`
      )
      .join("\n");
    const finalMessage = `Orçamento:\n${message}\nTotal: R$ ${total.toFixed(2)}`;
    const phone = "5581999999999"; // Número de WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      finalMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Box mt={4}>
      <Typography variant="h5">Itens Selecionados</Typography>
      {selectedItems.map((selected, index) => (
        <Typography key={index}>
          {selected.item.name} - {selected.quantity}x
        </Typography>
      ))}
      <Typography variant="h6" mt={2}>
        Total: R$ {total.toFixed(2)}
      </Typography>
      <Button variant="contained" color="success" onClick={handleSendToWhatsApp}>
        Enviar para o WhatsApp
      </Button>
    </Box>
  );
};

export default BudgetForm;