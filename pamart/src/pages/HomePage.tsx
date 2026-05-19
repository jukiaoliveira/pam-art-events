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
import { groupedItems } from "../data/items";

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
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 0,
            p: { xs: 3, md: 5 },
            backgroundColor: "#fff",
            border: "1px solid #000",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontFamily: "serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "#1a1a1a",
            pb: 1,
            borderBottom: "1px solid #eee",
          }}
        >
          Seu Cenário
        </DialogTitle>

        <DialogContent sx={{ mt: 3, p: 0 }}>
          <Box sx={{ mb: 3, pb: 2, borderBottom: "1px dashed #ccc" }}>
            <Typography
              variant="overline"
              sx={{ color: "#888", letterSpacing: 1, fontWeight: 700 }}
            >
              Estilo Escolhido
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "serif",
                fontStyle: "italic",
                color: "#FF69B4",
              }}
            >
              {selectedTheme || "Não definido"}
            </Typography>
          </Box>

          <Typography
            variant="overline"
            sx={{
              color: "#888",
              letterSpacing: 1,
              fontWeight: 700,
              display: "block",
              mb: 1,
            }}
          >
            Itens Selecionados
          </Typography>

          <List disablePadding>
            {selectedItems.map((s) => (
              <ListItem
                key={s.item.id}
                sx={{ px: 0, py: 1, borderBottom: "1px solid #f5f5f5" }}
              >
                <ListItemText
                  primary={s.item.name}
                  primaryTypographyProps={{
                    sx: { fontWeight: 500, color: "#222" },
                  }}
                  secondary={`Quantidade: ${s.quantity}x`}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "#1a1a1a" }}
                >
                  R$ {(s.item.price * s.quantity).toFixed(2)}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              p: 2.5,
              mt: 4,
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="button"
              sx={{ letterSpacing: 1, fontWeight: 600 }}
            >
              Total Estimado
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "1.3rem" }}
            >
              R$ {total.toFixed(2)}
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ flexDirection: "column", p: 0, mt: 4, gap: 1.5 }}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            fullWidth
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              borderRadius: 0,
              py: 2,
              fontWeight: 600,
              letterSpacing: 0.5,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#128C7E", boxShadow: "none" },
            }}
          >
            Enviar para WhatsApp
          </Button>

          <Button
            onClick={handleCloseModal}
            fullWidth
            sx={{
              color: "#888",
              borderRadius: 0,
              fontWeight: 600,
              py: 1,
              "&:hover": { color: "#000", backgroundColor: "transparent" },
            }}
          >
            Continuar Editando
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
