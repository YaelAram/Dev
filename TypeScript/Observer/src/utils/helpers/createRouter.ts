import { getCurrentPath } from "./getCurrentPath";
import { NAVIGATION_EVENT } from "./";

export interface Route {
  path: string;
  selector: string;
}

const updatePage = (app: HTMLDivElement, selector: string) => {
  app.innerHTML = `<${selector}></${selector}>`;
};

export const createRouter = (routes: Route[], app: HTMLDivElement) => {
  const changePage = () => {
    const currentPath = getCurrentPath();
    const { selector } = routes.find(({ path }) => path === currentPath)!;

    if (!document.startViewTransition) {
      updatePage(app, selector);
      return;
    }

    document.startViewTransition(() => updatePage(app, selector));
  };

  changePage();

  window.addEventListener(NAVIGATION_EVENT, changePage);
  window.addEventListener("popstate", changePage);
};
