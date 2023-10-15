import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useQuestionsStore } from "../store";
import { Question } from "./";

export const Game = () => {
  const { questions, currentQuestion, prevQuestion, nextQuestion } =
    useQuestionsStore();
  const question = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton onClick={prevQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={nextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question {...question} />
    </>
  );
};
