import { NAVIGATION_EVENT } from "./";
import { getCurrentPath } from "./getCurrentPath";

export interface Route {
  path: string;
  selector: string;
  title: string;
}

const updatePage = (app: HTMLDivElement, selector: string) => {
  app.innerHTML = `<${selector}></${selector}>`;
};

export const createRouter = (routes: Route[], app: HTMLDivElement) => {
  const changePage = () => {
    const currentPath = getCurrentPath();
    const { selector, title } = routes.find(
      ({ path }) => path === currentPath
    )!;
    document.title = title;

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
