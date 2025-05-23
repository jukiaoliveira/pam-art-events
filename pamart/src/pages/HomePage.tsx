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
  Box,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ItemList from "../components/ItemList";
import type { PartyItem } from "../types";
import { useThemeContext } from "../context/ThemeContext";

// ORGANIZAÇÃO POR CATEGORIAS
const groupedItems: { title: string; items: PartyItem[] }[] = [
  {
    title: "Itens de Decoração",
    items: [
      {
        id: 1,
        name: "Painel Redondo",
        description: "Painel redondo para decoração.",
        price: 0,
        image: "images/painelredondo1.jpg",
      },
      {
        id: 2,
        name: "Painel Romano",
        description: "Painel romano para decoração.",
        price: 0,
        image: "images/painelromano.jpeg",
      },
      {
        id: 3,
        name: "Mesas para Painel",
        description: "Mesas de apoio para painel.",
        price: 0,
        image: "images/mesa.jpg",
      },
      {
        id: 4,
        name: "Mesas para Painel 2",
        description: "Mesas de apoio para painel.",
        price: 0,
        image: "images/mesa2.jpg",
      },
      {
        id: 5,
        name: "Cilindros",
        description: "Cilindros decorativos.",
        price: 0,
        image: "images/cilindros.jpg",
      },
      {
        id: 6,
        name: "Tapete",
        description: "Tapete para composição da decoração.",
        price: 0,
        image: "images/tapete.jpg",
      },
      {
        id: 7,
        name: "Cômoda Fake",
        description: "Cômoda fake para decoração.",
        price: 0,
        image: "images/comoda.jpg",
      },
      {
        id: 8,
        name: "Escadinha de Lembranças",
        description: "Escadinha para lembrancinhas.",
        price: 0,
        image: "images/escadinha.jpg",
      },
      {
        id: 9,
        name: "Display Tema",
        description: "Display do tema escolhido.",
        price: 0,
        image: "images/display.jpg",
      },
      {
        id: 10,
        name: "Número em LED",
        description: "Número luminoso em LED.",
        price: 0,
        image: "images/numero-de-led.jpg",
      },
    ],
  },
  {
    title: "Itens de Balão",
    items: [
      {
        id: 11,
        name: "Arco de balão SIMPLES",
        description: "Arco simples de balões.",
        price: 0,
        image: "images/simples.png",
      },
      {
        id: 12,
        name: "Arco de balão ORGÂNICO",
        description: "Arco orgânico de balões.",
        price: 0,
        image: "images/organico.png",
      },
    ],
  },
  {
    title: "Itens de Mesa",
    items: [
      {
        id: 13,
        name: "Bandejas",
        description: "Bandejas decorativas para mesa.",
        price: 0,
        image: "images/bandejas.jpg",
      },
      {
        id: 14,
        name: "Bolo Fake",
        description: "Bolo decorativo (fake).",
        price: 0,
        image: "images/bolofake.jpg",
      },
    ],
  },
  {
    title: "Itens Digitais/Personalizados",
    items: [
      {
        id: 15,
        name: "Convite Digital",
        description: "Convite digital personalizado.",
        price: 0,
        image: "images/convite.jpg",
      },
      {
        id: 16,
        name: "Artes Personalizadas",
        description: "Artes digitais personalizadas para a festa.",
        price: 0,
        image: "images/personalizados.jpeg",
      },
    ],
  },
  {
    title: "Pegue e Monte",
    items: [
      {
        id: 17,
        name: "Kit Completo",
        description: "Kit para você mesmo montar.",
        price: 200,
        image: "images/peguemonte.jpg",
      },
    ],
  },
];

// Novo SelectedItem com quantity
type SelectedItemWithQuantity = {
  item: PartyItem;
  quantity: number;
};

const HomePage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<
    SelectedItemWithQuantity[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { selectedTheme } = useThemeContext();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Adicionar item (incrementa quantidade se já existe)
  const handleAddItem = (item: PartyItem) => {
    setSelectedItems((prev) => {
      const existing = prev.find((selected) => selected.item.id === item.id);
      if (existing) {
        return prev.map((selected) =>
          selected.item.id === item.id
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Remover item (diminui quantidade, remove se for 1)
  const handleRemoveItem = (itemId: number) => {
    setSelectedItems((prev) => {
      const found = prev.find((selected) => selected.item.id === itemId);
      if (!found) return prev;
      if (found.quantity > 1) {
        return prev.map((selected) =>
          selected.item.id === itemId
            ? { ...selected, quantity: selected.quantity - 1 }
            : selected
        );
      }
      return prev.filter((selected) => selected.item.id !== itemId);
    });
  };

  const total = selectedItems.reduce(
    (sum, selected) => sum + selected.item.price * selected.quantity,
    0
  );

  const handleWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert("Nenhum item foi selecionado!");
      return;
    }

    const introMessage =
      "Olá! Gostaria de fazer um orçamento. A princípio, quero esses itens:";

    const message = [
      introMessage,
      `Tema escolhido: ${selectedTheme ?? "Nenhum"}`,
      ...selectedItems.map(
        (selected) =>
          `${selected.item.name}${
            selected.quantity > 1 ? ` x${selected.quantity}` : ""
          } - R$ ${(selected.item.price * selected.quantity).toFixed(2)}`
      ),
      `\nTotal: R$ ${total.toFixed(2)}`,
    ].join("\n");

    const phoneNumber = "5535992656047";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        pb: { xs: 2, sm: 4 },
        px: { xs: 0, sm: 2 },
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f1e3dd",
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 2 },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 56, sm: 80 },
          }}
        >
          <IconButton
            edge="start"
            color="secondary"
            onClick={() => (window.location.href = "/")}
            sx={{ mr: 1 }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />
          </IconButton>

          <Box
            component="img"
            src="/images/logo.jpg"
            alt="Logo Pam Art"
            sx={{
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Toolbar>
      </AppBar>

      {/* Tema escolhido em destaque */}
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.6rem", sm: "2.4rem" },
            fontFamily: "Migra, serif",
            fontWeight: 700,
            color: "#FF85C1",
            textAlign: "center",
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Tema escolhido: {selectedTheme ?? "Nenhum"}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: 1.6,
            color: "#555",
            textAlign: "center",
            mb: { xs: 3, sm: 4 },
          }}
        >
          Todos os valores exibidos já incluem a mão de obra da montagem e
          decoração. Este é apenas um orçamento inicial. Assim que você escolher
          os itens desejados, vamos te direcionar para o WhatsApp para
          alinharmos os detalhes como data, local e ajustes personalizados.
          Estamos aqui para tornar o seu momento ainda mais especial!
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Migra, serif",
            fontWeight: "bold",
            color: "#353535",
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.7rem" },
            mb: { xs: 2, sm: 3 },
          }}
          gutterBottom
        >
          Opções de Itens:
        </Typography>
      </Box>

      {/* Renderização dos grupos de itens */}
      <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 2 } }}>
        {groupedItems.map((group) => (
          <Box key={group.title} sx={{ mb: { xs: 4, sm: 5 } }}>
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3 },
                color: "#FF69B4",
                fontWeight: "bold",
                fontFamily: "Migra, serif",
                textAlign: "center",
                fontSize: { xs: "1.4rem", sm: "2rem" },
              }}
            >
              {group.title}
            </Typography>
            <ItemList
              items={group.items}
              selectedItems={selectedItems}
              onRemove={handleRemoveItem}
              onAdd={handleAddItem}
            />
          </Box>
        ))}

        {/* Botão "Resumo do Pedido" */}
        <Box sx={{ textAlign: "center", mt: { xs: 4, sm: 5 } }}>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              backgroundColor: "#FF69B4",
              "&:hover": { backgroundColor: "#FF85C1" },
              px: { xs: 3, sm: 5 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: { xs: "1rem", sm: "1.125rem" },
              width: { xs: "100%", sm: "auto" },
              maxWidth: 300,
            }}
          >
            Resumo do Pedido
          </Button>
        </Box>
      </Box>

      {/* Modal de Resumo */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: 4,
            m: { xs: 1.5, sm: 4 },
            width: "100%",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #e0e0e0",
            p: { xs: 2, sm: 3 },
            textAlign: "center",
            fontFamily: "Migra, serif",
            fontWeight: "bold",
            fontSize: { xs: "1.4rem", sm: "1.7rem" },
            color: "#FF69B4",
          }}
        >
          Resumo do Pedido
        </DialogTitle>

        <DialogContent
          sx={{
            backgroundColor: "#fff",
            p: { xs: 2, sm: 3 },
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              fontWeight: 500,
            }}
          >
            <b>Tema escolhido:</b> {selectedTheme ?? "Nenhum"}
          </Typography>

          <List dense>
            {selectedItems.map((selected) => (
              <ListItem
                key={selected.item.id}
                sx={{
                  px: 0,
                  py: 1,
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <ListItemText
                  primary={`${selected.item.name}${
                    selected.quantity > 1 ? ` x${selected.quantity}` : ""
                  }`}
                  secondary={`R$ ${(
                    selected.item.price * selected.quantity
                  ).toFixed(2)}`}
                  primaryTypographyProps={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                  secondaryTypographyProps={{
                    color: "#757575",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                />
                <ListItemSecondaryAction>
                  <MuiIconButton
                    edge="end"
                    onClick={() => handleRemoveItem(selected.item.id)}
                    sx={{
                      color: "#FF69B4",
                      "&:hover": { color: "#E91E63" },
                    }}
                  >
                    <CloseIcon />
                  </MuiIconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Typography
            variant="h6"
            sx={{
              mt: 3,
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
              textAlign: "center",
              fontWeight: "bold",
              color: "#4CAF50",
              borderTop: "1px solid #eee",
              pt: 2,
            }}
          >
            Total: R$ {total.toFixed(2)}
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            backgroundColor: "#fff",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            p: { xs: 2, sm: 3 },
          }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": { backgroundColor: "#388E3C" },
              px: 3,
              py: 1.2,
              borderRadius: 3,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              width: { xs: "100%", sm: "auto" },
              minWidth: 200,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Enviar para WhatsApp
          </Button>

          <Button
            onClick={handleCloseModal}
            sx={{
              color: "#FF69B4",
              backgroundColor: "transparent",
              border: "2px solid #FF69B4",
              "&:hover": {
                backgroundColor: "#FF69B4",
                color: "#fff",
              },
              fontSize: { xs: "0.9rem", sm: "0.95rem" },
              width: { xs: "100%", sm: "auto" },
              minWidth: 200,
              borderRadius: 3,
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
