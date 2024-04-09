import type { Commands } from "./commands";
import type { Menu } from "./menu";
import type { Scopes } from "./scopes";
import type { UI } from "./ui";

export type { CommandContext } from "./commands";

export type Navigation = {
  goTo: (path: string) => void;
  addPage: (path: string, options: PageOptions) => void;
};

type PageOptions = {
  body: HTMLElement;
  topbar?: HTMLElement;
};
