import { API } from "./types";

declare global {
  interface Window {
    Caido: API;
  }
}

declare const Caido: API;

export { Caido };
