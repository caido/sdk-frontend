export type BackendAPI = Record<string, (...args: any[]) => any>;
export type ToBackendRPC<T extends BackendAPI> = {
    [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<T[K]> extends Promise<infer U> ? Promise<U> : Promise<ReturnType<T[K]>>;
};
