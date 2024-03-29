import { API } from "./types";

declare global {
  interface Window {
    Caido: API;
  }
}

export { API };
