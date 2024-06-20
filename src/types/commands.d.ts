export type Commands = {
    register: (id: string, options: CommandOptions) => void;
};
type CommandOptions = {
    name: string;
    run: (context: CommandContext) => void;
    group?: string;
    when?: (context: CommandContext) => boolean;
};
type CommandContextBase = {
    type: "BaseContext";
};
type CommandContextRequestRow = {
    type: "RequestRowContext";
    requests: {
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    }[];
};
type CommandContextRequest = {
    type: "RequestContext";
    request: {
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
        raw: string;
    };
    selection: string;
};
type CommandContextResponse = {
    type: "ResponseContext";
    request: {
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    };
    response: {
        id: string;
        raw: string;
        statusCode: number;
        roundtripTime: number;
    };
    selection: string;
};
export type CommandContext = CommandContextBase | CommandContextRequestRow | CommandContextRequest | CommandContextResponse;
export {};
