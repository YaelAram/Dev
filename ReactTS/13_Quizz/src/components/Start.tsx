import { Button } from "@mui/material";
import { useQuestionsStore } from "../store";

export const Start = () => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);

  const handleClick = () => {
    getQuestions(10);
  };

  return (
    <Button onClick={handleClick} variant="contained">
      Comenzar
    </Button>
  );
};
