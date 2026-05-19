import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    themes: ["1 ano", "15 anos", "18 anos", "30, 40, 50 anos"],
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

const allThemes = themeGroups.flatMap((group) =>
  group.themes.map((theme) => ({ category: group.category, theme })),
);

const ThemeSelectionPage: React.FC = () => {
  const { setSelectedTheme } = useThemeContext();
  const [localTheme, setLocalTheme] = useState<{
    category: string;
    theme: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (localTheme) {
      setSelectedTheme(localTheme.theme);
      navigate("/home");
    }
  };

  const scrollToSection = () => {
    document
      .getElementById("orcamento")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FAF9F6" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          Height: "100vh",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* CORREÇÃO DO ENQUADRAMENTO DA FOTO */}
        <Box
          sx={{
            flex: 1.2,
            height: { xs: "45vh", md: "auto" },
            backgroundImage:
              "url('/images/Captura de tela de 2026-05-18 21-37-25.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: { md: "100vh" },
          }}
        />

        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#FF69B4",
              fontWeight: 700,
              letterSpacing: 4,
              mb: 2,
              display: "block",
            }}
          >
            ESTILO & SOFISTICAÇÃO
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: { xs: "2.8rem", md: "4rem" },
              fontWeight: 700,
              mb: 4,
              lineHeight: 1.1,
              color: "#1a1a1a",
            }}
          >
            Pam Art{" "}
            <span style={{ color: "#b8b8b8", fontWeight: 300 }}>Events</span>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 4 }}>
            <Avatar
              src="/images/pam.jpeg"
              sx={{ width: 70, height: 70, border: "2px solid #FF69B4" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                Pamela Araújo
              </Typography>
              <Typography variant="body2" sx={{ color: "#888" }}>
                Designer de Eventos
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: "1.05rem",
              mb: 5,
              fontStyle: "italic",
              borderLeft: "4px solid #FF69B4",
              pl: 2,
              lineHeight: 1.6,
            }}
          >
            "Minha missão é transformar cada detalhe da sua festa em uma obra de
            arte inesquecível."
          </Typography>

          <Button
            variant="contained"
            onClick={scrollToSection}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 0,
              py: 1.8,
              px: 5,
              width: "fit-content",
              fontWeight: 600,
              letterSpacing: 1,
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#FF69B4" },
            }}
          >
            MONTAR ORÇAMENTO
          </Button>
        </Box>
      </Box>

      <Box
        id="orcamento"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF9F6",
          px: 3,
          borderTop: "1px solid #eee",
        }}
      >
        <Box sx={{ maxWidth: 600, textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontWeight: 600,
              color: "#222",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            O Início de um Sonho
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#666", fontSize: "1.1rem" }}
          >
            Digite o tema desejado ou selecione uma das nossas categorias
            principais abaixo para começar a montar seu cenário.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fff",
            p: { xs: 4, md: 6 },
            borderRadius: 0,
            boxShadow: "0px 15px 40px rgba(0,0,0,0.04)",
            width: "100%",
            maxWidth: 650,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #eee",
          }}
        >
          <Autocomplete
            options={allThemes}
            groupBy={(option) => option.category}
            getOptionLabel={(option) => option.theme}
            value={localTheme}
            onChange={(_, newValue) => setLocalTheme(newValue)}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="Busque ou digite o tema da festa..."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    height: 60,
                    fontSize: "1.1rem",
                  },
                }}
              />
            )}
          />

          <Typography
            variant="body2"
            sx={{
              alignSelf: "flex-start",
              mt: 4,
              mb: 2,
              fontWeight: 700,
              color: "#888",
              letterSpacing: 1,
            }}
          >
            OU SELECIONE POR CATEGORIA:
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            {[
              {
                label: "Infantil",
                sample: { category: "Clássicos Infantis", theme: "Mundo Bita" },
              },
              {
                label: "Casamento",
                sample: { category: "Casamento & Noivado", theme: "Casamento" },
              },
              {
                label: "15 Anos",
                sample: { category: "Aniversários & Idades", theme: "15 anos" },
              },
              {
                label: "Chá Revelação",
                sample: {
                  category: "Chás & Pré-festas",
                  theme: "Chá revelação",
                },
              },
              {
                label: "Cultura Pop",
                sample: { category: "Ícones da Cultura Pop", theme: "Barbie" },
              },
              {
                label: "Neon / Balada",
                sample: { category: "Música & Estilos", theme: "Festa neon" },
              },
            ].map((cat) => (
              <Box
                key={cat.label}
                onClick={() => setLocalTheme(cat.sample)}
                sx={{
                  border:
                    localTheme?.theme === cat.sample.theme
                      ? "2px solid #FF69B4"
                      : "1px solid #e5e5e5",
                  backgroundColor:
                    localTheme?.theme === cat.sample.theme
                      ? "rgba(255, 105, 180, 0.05)"
                      : "#fff",
                  p: 2,
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color:
                    localTheme?.theme === cat.sample.theme ? "#FF69B4" : "#444",
                  "&:hover": {
                    borderColor: "#FF69B4",
                    color: "#FF69B4",
                  },
                }}
              >
                {cat.label}
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!localTheme}
            sx={{
              mt: 4,
              backgroundColor: "#000",
              color: "#fff",
              px: 8,
              py: 2,
              borderRadius: 0,
              fontWeight: 600,
              width: "100%",
              fontSize: "1rem",
              letterSpacing: 1,
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#FF69B4" },
              "&:disabled": { backgroundColor: "#f5f5f5", color: "#ccc" },
            }}
          >
            AVANÇAR PARA OS ITENS →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeSelectionPage;
