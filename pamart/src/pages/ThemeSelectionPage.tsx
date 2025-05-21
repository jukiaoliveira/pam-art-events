import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackgroundAnimations from "../components/BackgroundAnimations";
import { useThemeContext } from "../context/ThemeContext";

const themeGroups = [
  {
    category: "Clássicos Infantis",
    themes: [
      "Turma da Mônica",
      "Mickey e Minnie",
      "Patati Patatá",
      "Galinha Pintadinha",
      "Ursinho Pooh",
      "Backyardigans",
      "Dora, a Aventureira",
      "Bob Esponja",
      "Baby Shark",
      "Mundo Bita",
    ],
  },
  {
    category: "Contos & Magia",
    themes: [
      "Fadas",
      "Unicórnios",
      "Sereias",
      "Princesas da Disney",
      "Castelo Encantado",
      "Peter Pan e Sininho",
      "Frozen",
      "Encanto",
      "Moana",
      "Alice no País das Maravilhas",
    ],
  },
  {
    category: "Aventura & Ação",
    themes: [
      "Carros (Disney)",
      "Hot Wheels",
      "Dinossauros",
      "Super-Heróis (Marvel / DC)",
      "Vingadores",
      "Homem-Aranha",
      "Batman",
      "Power Rangers",
      "Transformers",
      "Toy Story",
    ],
  },
  {
    category: "Animais & Natureza",
    themes: [
      "Safari",
      "Zoológico",
      "Fazenda",
      "Floresta",
      "Fundo do Mar",
      "Arca de Noé",
      "Piquenique no parque",
    ],
  },
  {
    category: "Aniversários & Idades",
    themes: [
      "1 ano",
      "15 anos",
      "18 anos",
      "30, 40, 50 anos",
    ],
  },
  {
    category: "Chás & Pré-festas",
    themes: [
      "Chá de bebê",
      "Chá revelação",
      "Chá de fraldas",
      "Chá de panela",
      "Chá bar/Chá rifa",
    ],
  },
  {
    category: "Casamento & Noivado",
    themes: [
      "Noivado",
      "Casamento",
      "Casamento tropical",
      "Casamento clássico branco",
      "Festa do sim (pré-casamento)",
    ],
  },
  {
    category: "TEMÁTICAS VARIADAS & PERSONALIZADAS",
    themes: [],
  },
  {
    category: "Ícones da Cultura Pop",
    themes: [
      "Barbie",
      "Ana Castela",
      "Luan Santana",
      "Harry Potter",
      "Star Wars",
      "Stranger Things",
      "Lilo & Stitch",
      "Pokémon",
      "Minecraft",
      "Roblox",
    ],
  },
  {
    category: "Música & Estilos",
    themes: [
      "Country",
      "Sertanejo universitário",
      "Festa junina",
      "K-pop",
      "Rock’n’Roll",
      "Funk anos 2000",
      "Festa neon",
      "Anos 80 / 90 / 2000",
    ],
  },
];

// Monta um array com todos os temas e suas categorias
const allThemes: { category: string; theme: string }[] =
  themeGroups.flatMap(group =>
    group.themes.map(theme => ({
      category: group.category,
      theme,
    }))
  );

const ThemeSelectionPage: React.FC = () => {
  const { setSelectedTheme } = useThemeContext();
  const [localTheme, setLocalTheme] = useState<{ category: string; theme: string } | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (localTheme) {
      setSelectedTheme(localTheme.theme);
      navigate("/home");
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
          Comece seu orçamento escolhendo o tema:
        </Typography>

        <Autocomplete
          options={allThemes}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.theme}
          value={localTheme}
          onChange={(event, newValue) => setLocalTheme(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Escolha ou busque um tema"
              sx={{
                minWidth: 300,
                backgroundColor: "#FFFFFF",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF69B4",
                },
              }}
            />
          )}
          isOptionEqualToValue={(option, value) => option.theme === value.theme}
        />

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!localTheme}
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