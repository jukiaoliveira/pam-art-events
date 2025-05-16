import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

const ThemeSelectionPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedTheme(event.target.value);
  };

  const handleNext = () => {
    if (selectedTheme) {
      console.log("Tema selecionado:", selectedTheme);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f1e3dd", // Rosa claro para o fundo
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3, // Espaçamento entre os elementos
        padding: 2,
      }}
    >
      {/* Nome da empresa estilizado */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Migra, serif", 
          fontWeight: "bold",
          color: "#000000", 
          textAlign: "center",
          fontSize: "4rem",  
        }}
      >
        Pam Art
      </Typography>

      {/* Texto de instrução */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1.2rem",
          color: "#4A4A4A", // Cinza escuro
          textAlign: "center",
        }}
      >
        Comece seu orçamento escolhendo o tema
      </Typography>

      {/* Input de seleção de tema */}
      <FormControl
        sx={{
          minWidth: 300,
          backgroundColor: "#FFFFFF", // Branco
          borderRadius: 1,
          border: `2px solid #FF69B4`, // Borda rosa claro
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EFC9B6", // Borda rosa
          },
        }}
      >
        <InputLabel id="theme-select-label">Escolha o tema</InputLabel>
        <Select
          labelId="theme-select-label"
          value={selectedTheme}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EFC9B6", // Borda rosa
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EFC9B6", // Borda rosa no hover
            },
          }}
        >
          <MenuItem value="Tema 1">Tema 1</MenuItem>
          <MenuItem value="Tema 2">Tema 2</MenuItem>
          <MenuItem value="Tema 3">Tema 3</MenuItem>
        </Select>
      </FormControl>

      {/* Botão de avançar */}
      <Button
        variant="contained"
        onClick={handleNext}
        disabled={!selectedTheme}
        sx={{
          backgroundColor: "#FF69B4", 
          color: "#000000", // Preto
          "&:hover": {
            backgroundColor: "#f1e3dd", 
          },
          "&:disabled": {
            backgroundColor: "#FF69B4", 
            color: "#A9A9A9", 
          },
          paddingX: 4,
          paddingY: 1.5,
          borderRadius: 2,
        }}
      >
        Avançar
      </Button>
    </Box>
  );
};

export default ThemeSelectionPage;