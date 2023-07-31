import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Router } from "./Router";
import { getCurrentPath } from "./helpers/getCurrentPath";
import { Route } from "./Route";
import { Link } from "./components/Link";

vi.mock("./helpers/getCurrentPath", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router component", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("Should Work", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("Should render 404 message", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404 Error</h1>} />);
    expect(screen.getByText("404 Error")).toBeTruthy();
  });

  it("Should render Home component", () => {
    getCurrentPath.mockReturnValue("/about");
    const routes = [
      {
        path: "/",
        component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        component: () => <h1>About</h1>,
      },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  it("Should navigate clicking a Link", async () => {
    getCurrentPath.mockReturnValueOnce("/");

    render(
      <Router>
        <Route
          path="/"
          component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to={"/about"}>Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" component={() => <h1>About</h1>} />
      </Router>
    );

    const link = await screen.findByText("Go to About");
    fireEvent.click(link);

    const aboutTitle = await screen.findByText("About");

    expect(aboutTitle).toBeTruthy();
  });
});
