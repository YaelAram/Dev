import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { getBgColor } from "../helpers";
import { type Question as QuestionType } from "../interfaces";
import { useQuestionsStore } from "../store";

export const Question: React.FC<QuestionType> = ({
  question,
  code,
  options,
  id,
  optionSelected,
  answer,
}) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "#222", p: 2, textAlign: "left", marginTop: 4 }}
    >
      <Typography variant="h5" textAlign="center">
        {question}
      </Typography>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: "#333" }} disablePadding>
        {options.map((option, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              onClick={() => selectAnswer(id, index)}
              sx={{ bgcolor: getBgColor(index, optionSelected, answer) }}
              disabled={optionSelected !== undefined}
            >
              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
