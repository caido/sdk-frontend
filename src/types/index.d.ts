import type { Sdk } from "./__generated__/graphql-sdk";
import type { BackendAPI, ToBackendRPC } from "./backend";
import type { Commands } from "./commands";
import type { Findings } from "./findings";
import type { Menu } from "./menu";
import type { Navigation } from "./navigation";
import type { Scopes } from "./scopes";
import type { Storage } from "./storage";
import type { UI } from "./ui";
import type { Window } from "./window";
export type { CommandContext } from "./commands";
export type API<T extends BackendAPI = Record<string, never>> = {
    ui: UI;
    backend: ToBackendRPC<T>;
    scopes: Scopes;
    findings: Findings;
    commands: Commands;
    menu: Menu;
    navigation: Navigation;
    window: Window;
    storage: Storage;
    shortcuts: {
        register: (commandId: string, keys: string[]) => void;
    };
    commandPalette: {
        register: (commandId: string) => void;
    };
    sidebar: {
        registerItem: (name: string, path: string, options?: SidebarItemOptions) => SidebarItem;
    };
    graphql: Sdk;
};
type SidebarItemOptions = {
    icon?: string;
    group?: string;
    isExternal?: boolean;
};
type SidebarItem = {
    setCount: (count: number) => void;
};
