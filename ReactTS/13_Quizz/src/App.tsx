import { Container, Stack, Typography } from "@mui/material";
import "./App.css";

import { Game, JavaScriptLogo, Reset, Start } from "./components";
import { useQuestionsStore } from "./store";

export function App() {
  const questions = useQuestionsStore((state) => state.questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        {questions.length ? <Game /> : <Start />}
        {questions.length ? <Reset /> : undefined}
      </Container>
    </main>
  );
}
