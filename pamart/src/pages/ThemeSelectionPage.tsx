import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importe o hook
import BackgroundAnimations from "../components/BackgroundAnimations"; // Importa o fundo animado

const ThemeSelectionPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null); // Estado para o tema selecionado
  const navigate = useNavigate(); // Inicialize o hook aqui, dentro do componente funcional

  // Lista de temas
  const themes = [
    "Tema Tropical",
    "Tema Clássico",
    "Tema Infantil",
    "Tema Moderno",
    "Tema Vintage",
    "Tema Minimalista",
    "Tema Futurista",
  ];

  // Função para avançar
  const handleNext = () => {
    if (selectedTheme) {
      console.log("Tema selecionado:", selectedTheme);
      navigate("/home"); // Redirecione para a rota desejada
    } else {
      console.error("Nenhum tema foi selecionado!");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <BackgroundAnimations />

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          padding: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Migra, serif",
            fontWeight: "bold",
            color: "#000000",
            textAlign: "center",
          }}
        >
          Pam Art
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1.2rem",
            color: "#4A4A4A",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Comece seu orçamento escolhendo o tema
        </Typography>

        <Autocomplete
          options={themes}
          value={selectedTheme}
          onChange={(event, newValue) => setSelectedTheme(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Escolha ou busque um tema"
              sx={{
                minWidth: 300,
                backgroundColor: "#FFFFFF",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#EFC9B6",
                },
              }}
            />
          )}
        />

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedTheme}
          sx={{
            backgroundColor: "#FF69B4",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#f1e3dd",
            },
            "&:disabled": {
              backgroundColor: "#FF69B4",
              color: "#000",
            },
            paddingX: 4,
            paddingY: 1.5,
            borderRadius: 2,
          }}
        >
          Avançar
        </Button>
      </Box>
    </Box>
  );
};

export default ThemeSelectionPage;