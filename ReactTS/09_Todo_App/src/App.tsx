import { Header, Footer, Todos } from "./components";

import "./App.css";

function App() {
  return (
    <div className="todoapp">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
