import { getCurrentPath } from "./getCurrentPath";
import { NAVIGATION_EVENT } from "./";

export interface Route {
  path: string;
  selector: string;
}

export const createRouter = <T>(
  routes: Route[],
  app: HTMLDivElement,
  context: T
) => {
  const changePage = () => {
    const currentPath = getCurrentPath();
    const { selector } = routes.find(({ path }) => path === currentPath)!;
    app.innerHTML = `<${selector}></${selector}>`;
    document.querySelector<any>(selector)!?.setState(context);
  };

  changePage();

  window.addEventListener(NAVIGATION_EVENT, changePage);
  window.addEventListener("popstate", changePage);
};
