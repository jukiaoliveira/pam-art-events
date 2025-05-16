import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ItemList from "../components/ItemList";
import BudgetForm from "../components/BudgetForm";
import type { PartyItem, SelectedItem } from "../types";

const HomePage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const availableItems: PartyItem[] = [
    {
      id: 1,
      name: "Decoração com balões",
      description: "Decoração completa com balões coloridos.",
      price: 150,
      image: "/images/balloons.jpg",
    },
    {
      id: 2,
      name: "Mesa temática",
      description: "Mesa temática com temas personalizados.",
      price: 300,
      image: "/images/thematic-table.jpg",
    },
    // Adicione mais itens aqui
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Orçamento de Festas 🎉
      </Typography>
      <ItemList items={availableItems} setSelectedItems={setSelectedItems} />
      <BudgetForm selectedItems={selectedItems} />
    </Container>
  );
};

export default HomePage;