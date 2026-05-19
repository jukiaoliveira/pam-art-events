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
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ItemList from "../components/ItemList";
import type { PartyItem } from "../types";
import { useThemeContext } from "../context/ThemeContext";

// ITENS ORGANIZADOS POR PASSOS
const groupedItems: { title: string; items: PartyItem[] }[] = [
  {
    title: "Estrutura & Painéis",
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
        id: 7,
        name: "Cômoda Fake",
        description: "Cômoda fake para decoração.",
        price: 0,
        image: "images/comoda.jpg",
      },
    ],
  },
  {
    title: "Arte com Balões",
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
    title: "Itens de Mesa & Detalhes",
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
      {
        id: 8,
        name: "Escadinha de Lembranças",
        description: "Escadinha para lembrancinhas.",
        price: 0,
        image: "images/escadinha.jpg",
      },
    ],
  },
  {
    title: "Personalizados & Extras",
    items: [
      {
        id: 10,
        name: "Número em LED",
        description: "Número luminoso em LED.",
        price: 0,
        image: "images/numero-de-led.jpg",
      },
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
];

type SelectedItemWithQuantity = {
  item: PartyItem;
  quantity: number;
};

const HomePage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<
    SelectedItemWithQuantity[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { selectedTheme } = useThemeContext();

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddItem = (item: PartyItem) => {
    setSelectedItems((prev) => {
      const existing = prev.find((selected) => selected.item.id === item.id);
      if (existing) {
        return prev.map((selected) =>
          selected.item.id === item.id
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected,
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleRemoveItem = (itemId: number) => {
    setSelectedItems((prev) => {
      const found = prev.find((selected) => selected.item.id === itemId);
      if (!found) return prev;
      if (found.quantity > 1) {
        return prev.map((selected) =>
          selected.item.id === itemId
            ? { ...selected, quantity: selected.quantity - 1 }
            : selected,
        );
      }
      return prev.filter((selected) => selected.item.id !== itemId);
    });
  };

  const total = selectedItems.reduce(
    (sum, s) => sum + s.item.price * s.quantity,
    0,
  );

  const handleWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert("Selecione pelo menos um item para continuar!");
      return;
    }

    const message = [
      `*Solicitação de Orçamento - Pam Art Events*`,
      `---------------------------------------`,
      `*Tema:* ${selectedTheme || "Não definido"}`,
      `*Itens Escolhidos:*`,
      ...selectedItems.map((s) => `- ${s.item.name} (${s.quantity}x)`),
      `---------------------------------------`,
      `*Total Estimado:* R$ ${total.toFixed(2)}`,
      `\nOlá Pam! Montei meu orçamento no site e gostaria de verificar a disponibilidade para a minha data.`,
    ].join("\n");

    const phone = "5535992656047";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "#FAF9F6", minHeight: "100vh", pb: 12 }}
    >
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#FFF", borderBottom: "1px solid #eee" }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={() => (window.location.href = "/")}>
            <ArrowBackIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontFamily: "serif", fontWeight: 700, color: "#000" }}
          >
            Seu Evento
          </Typography>
          <Box sx={{ width: 40 }} />
        </Toolbar>
      </AppBar>

      {/* STEPPER NO TOPO */}
      <Box sx={{ py: 4, px: 2, maxWidth: 900, mx: "auto" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {groupedItems.map((group) => (
            <Step key={group.title}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  },
                }}
              >
                {group.title}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* CONTEÚDO DO PASSO ATUAL */}
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "serif", fontWeight: 700, mb: 1 }}
          >
            {groupedItems[activeStep].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tema:{" "}
            <span style={{ color: "#FF69B4", fontWeight: 700 }}>
              {selectedTheme}
            </span>
          </Typography>
        </Box>

        <ItemList
          items={groupedItems[activeStep].items}
          selectedItems={selectedItems}
          onRemove={handleRemoveItem}
          onAdd={handleAddItem}
        />
      </Box>

      {/* BARRA DE NAVEGAÇÃO FIXA NO RODAPÉ */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: "#fff",
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "center",
          gap: 3,
          zIndex: 1000,
        }}
      >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            color: "#888",
            px: 4,
            borderRadius: 0,
            fontWeight: 600,
            transition: "all 0.2s ease",
            "&:hover": {
              color: "#FF69B4",
              backgroundColor: "transparent",
            },
            "&:disabled": {
              color: "#ccc",
            },
          }}
        >
          Voltar
        </Button>

        {activeStep < groupedItems.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 0,
              px: 6,
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FF69B4",
                outline: "2px solid #FF69B4",
              },
            }}
          >
            Próximo Passo
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              backgroundColor: "#FF69B4",
              color: "#fff",
              borderRadius: 0,
              px: 6,
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FF69B4",
                outline: "2px solid #FF69B4",
              },
            }}
          >
            Revisar Orçamento
          </Button>
        )}
      </Box>

      {/* MODAL DE RESUMO FINAL */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="xs"
        PaperProps={{ sx: { borderRadius: 0 } }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            borderBottom: "1px solid #eee",
          }}
        >
          Resumo do Orçamento
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Tema: <b>{selectedTheme}</b>
          </Typography>
          <List>
            {selectedItems.map((s) => (
              <ListItem key={s.item.id} sx={{ px: 0 }}>
                <ListItemText
                  primary={s.item.name}
                  secondary={`${s.quantity}x`}
                />
                <Typography variant="body2">
                  R$ {(s.item.price * s.quantity).toFixed(2)}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              borderTop: "2px solid #000",
              pt: 2,
              mt: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6">
              Total Estimado: R$ {total.toFixed(2)}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ flexDirection: "column", p: 3, gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            fullWidth
            sx={{
              backgroundColor: "#25D366",
              "&:hover": { backgroundColor: "#128C7E" },
              py: 1.5,
            }}
          >
            Enviar para WhatsApp
          </Button>
          <Button onClick={handleCloseModal} sx={{ color: "#888" }}>
            Continuar Editando
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
