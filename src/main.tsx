import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { SelectEntity } from "./types/filter.types.ts";

const rootRoute = createRootRoute({
  component: App,
  validateSearch: (search: Record<SelectEntity, number[]>) => search,
});

const router = createRouter({ routeTree: rootRoute });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
