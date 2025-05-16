import React, { useState } from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton as MuiIconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; // Ícone de seta para voltar
import CloseIcon from "@mui/icons-material/Close"; // Ícone de fechar (remover item)
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Ícone do WhatsApp
import ItemList from "../components/ItemList";
import type { PartyItem, SelectedItem } from "../types";

const HomePage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

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
    {
      id: 3,
      name: "Bolo decorado",
      description: "Bolo decorado com o tema da festa.",
      price: 200,
      image: "/images/cake.jpg",
    },
    {
      id: 4,
      name: "Lembrancinhas",
      description: "Lembrancinhas personalizadas para os convidados.",
      price: 100,
      image: "/images/gifts.jpg",
    },
    {
      id: 5,
      name: "Doces personalizados",
      description: "Doces decorados com o tema escolhido.",
      price: 120,
      image: "/images/sweets.jpg",
    },
    {
      id: 6,
      name: "Painel decorativo",
      description: "Painel temático para a festa.",
      price: 250,
      image: "/images/panel.jpg",
    },
    {
      id: 7,
      name: "Flores decorativas",
      description: "Arranjos de flores para decoração.",
      price: 180,
      image: "/images/flowers.jpg",
    },
    {
      id: 8,
      name: "Mobiliário",
      description: "Mesas e cadeiras decorativas.",
      price: 300,
      image: "/images/furniture.jpg",
    },
    {
      id: 9,
      name: "Iluminação especial",
      description: "Iluminação temática para a festa.",
      price: 400,
      image: "/images/lighting.jpg",
    },
  ];

  // Abrir modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Remover item selecionado
  const handleRemoveItem = (itemId: number) => {
    setSelectedItems((prev) =>
      prev.filter((selected) => selected.item.id !== itemId)
    );
  };

  // Total do orçamento
  const total = selectedItems.reduce(
    (sum, selected) => sum + selected.item.price,
    0
  );

  // Gerar link para o WhatsApp
  const handleWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert("Nenhum item foi selecionado!");
      return;
    }

    const message = selectedItems
      .map(
        (selected) =>
          `${selected.item.name} - R$ ${selected.item.price.toFixed(2)}`
      )
      .join("\n");

    const totalMessage = `\n\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      message + totalMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#FBE9E7", // Background bege
        minHeight: "100vh",
        paddingBottom: 4,
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#C8A2C8", padding: "10px 20px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <img
            src="/images/logo.jpg"
            alt="Logo Pam Art"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
        </Toolbar>
      </AppBar>

      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Migra, serif",
          fontWeight: "bold",
          color: "#000000",
          textAlign: "center",
          marginY: 4,
        }}
        gutterBottom
      >
        Orçamento:
      </Typography>

      {/* Lista de itens */}
      <ItemList
        items={availableItems}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems} // Adiciona a propriedade selectedItems
        onRemove={handleRemoveItem} // Adiciona a propriedade onRemove
      />

      {/* Botão "Resumo do Pedido" */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            backgroundColor: "#C8A2C8",
            "&:hover": {
              backgroundColor: "#FF85C1",
            },
            paddingX: 4,
            paddingY: 2,
            borderRadius: 3,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Resumo do Pedido
        </Button>
      </div>

      {/* Modal de Resumo */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Resumo do Pedido</DialogTitle>
        <DialogContent>
          <List>
            {selectedItems.map((selected) => (
              <ListItem key={selected.item.id}>
                <ListItemText
                  primary={selected.item.name}
                  secondary={`R$ ${selected.item.price.toFixed(2)}`}
                />
                <ListItemSecondaryAction>
                  <MuiIconButton
                    edge="end"
                    onClick={() => handleRemoveItem(selected.item.id)}
                  >
                    <CloseIcon />
                  </MuiIconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ marginTop: 2, textAlign: "center" }}>
            Total: R$ {total.toFixed(2)}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: 2, 
            padding: "16px",
          }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              backgroundColor: "#A5D6A7",
              "&:hover": {
                backgroundColor: "#81C784",
              },
              paddingX: 2, 
              paddingY: 1, 
              borderRadius: 3,
              fontSize: "0.875rem", 
              minWidth: "120px", 
              textAlign: "center",
            }}
          >
            Enviar para WhatsApp
          </Button>
          <Button
            onClick={handleCloseModal}
            color="primary"
            sx={{
              fontSize: "0.875rem", 
              minWidth: "120px", 
              border: `2px solid #FF69B4`,
            }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
