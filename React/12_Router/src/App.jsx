import { Suspense, lazy } from "react";
import { Route } from "./Route";
import { Router } from "./Router";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Search = lazy(() => import("./pages/Search"));

const routes = [
  {
    path: "/search/:query",
    component: Search,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={NotFound}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
