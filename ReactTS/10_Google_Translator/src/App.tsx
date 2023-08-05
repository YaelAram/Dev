import { Container, Row, Col, Button, Stack } from "react-bootstrap";

import { useStore } from "./hooks";
import { LanguageSelector, ArrowsIcon } from "./components";
import { AUTO_LANG, SelectorType } from "./interfaces";

import "./App.css";
import { TextArea } from "./components/TextArea";

function App() {
  const {
    isLoading,
    fromLanguage,
    fromText,
    toLanguage,
    translation,
    swapLang,
    changeFromLang,
    changeToLang,
    changeFromText,
    changeTranslation,
  } = useStore();

  return (
    <Container fluid>
      <h2 style={{ textAlign: "center" }}>Google Translator</h2>
      <Row>
        <Col>
          <Stack gap={3}>
            <LanguageSelector
              type={SelectorType.FROM}
              defaultLanguage={fromLanguage}
              onChange={changeFromLang}
            />
            <TextArea
              onChange={changeFromText}
              type={SelectorType.FROM}
              value={fromText}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            type="button"
            onClick={swapLang}
            disabled={fromLanguage === AUTO_LANG}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col xs="auto">
          <Stack gap={3}>
            <LanguageSelector
              type={SelectorType.TO}
              defaultLanguage={toLanguage}
              onChange={changeToLang}
            />
            <TextArea
              onChange={changeTranslation}
              type={SelectorType.TO}
              value={translation}
              loading={isLoading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
