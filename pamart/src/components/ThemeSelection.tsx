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
        backgroundColor: "#f1e3dd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 3,
        pt: { xs: 3, sm: 6 },
        px: 2,
        overflowY: "auto",
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
          fontSize: { xs: "2.2rem", sm: "4rem" },
        }}
      >
        Pam Art
      </Typography>

      {/* Texto de instrução */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "#4A4A4A",
          textAlign: "center",
        }}
      >
        Comece seu orçamento escolhendo o tema
      </Typography>

      {/* Input de seleção de tema */}
      <FormControl
        sx={{
          minWidth: { xs: 220, sm: 300 },
          backgroundColor: "#FFFFFF",
          borderRadius: 1,
          border: `2px solid #FF69B4`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EFC9B6",
          },
        }}
        size="small"
      >
        <InputLabel id="theme-select-label">Escolha o tema</InputLabel>
        <Select
          labelId="theme-select-label"
          value={selectedTheme}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EFC9B6",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EFC9B6",
            },
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
          }}
          label="Escolha o tema"
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
          color: "#000000",
          "&:hover": {
            backgroundColor: "#f1e3dd",
            color: "#FF69B4",
          },
          "&:disabled": {
            backgroundColor: "#FF69B4",
            color: "#A9A9A9",
          },
          px: { xs: 3, sm: 4 },
          py: { xs: 1, sm: 1.5 },
          borderRadius: 2,
          fontSize: { xs: "1rem", sm: "1.1rem" },
          width: { xs: "100%", sm: "auto" },
          maxWidth: 300,
        }}
      >
        Avançar
      </Button>
    </Box>
  );
};

export default ThemeSelectionPage;