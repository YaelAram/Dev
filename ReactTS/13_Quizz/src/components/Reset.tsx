import { Button } from "@mui/material";
import { useQuestionsStore } from "../store";

export const Reset = () => {
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <Button onClick={reset} variant="contained" sx={{ marginTop: 2 }}>
      Reiniciar Juego
    </Button>
  );
};
