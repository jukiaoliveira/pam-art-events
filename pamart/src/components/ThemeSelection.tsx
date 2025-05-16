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
import type { SelectChangeEvent } from "@mui/material/Select";

interface ThemeSelectionProps {
  themes: string[];
  onThemeSelect: (theme: string) => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({
  themes,
  onThemeSelect,
}) => {
  const [selectedTheme, setSelectedTheme] = useState("");

  // Note que aqui usamos o tipo SelectChangeEvent<string>
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedTheme(event.target.value); // O valor já será do tipo string
  };

  const handleNext = () => {
    if (selectedTheme) {
      onThemeSelect(selectedTheme);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à [Nome da Empresa] 🎉
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Comece seu orçamento escolhendo o tema
      </Typography>
      <FormControl style={{ minWidth: 200, margin: "20px 0" }}>
        <InputLabel id="theme-select-label">Escolha o tema</InputLabel>
        <Select
          labelId="theme-select-label"
          value={selectedTheme}
          onChange={handleChange} // Corrigido para usar SelectChangeEvent
        >
          {themes.map((theme, index) => (
            <MenuItem key={index} value={theme}>
              {theme}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={!selectedTheme}
      >
        Avançar
      </Button>
    </Box>
  );
};

export default ThemeSelection;