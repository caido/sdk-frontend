type JSONPrimitive = string | number | boolean | null | undefined;
type JSONValue = JSONPrimitive | JSONValue[] | {
    [key: string]: JSONValue;
};
type NotAssignableToJson = bigint | symbol | Function;
type JSONCompatible<T> = unknown extends T ? never : {
    [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]>;
};
export type Storage = {
    get: () => JSONValue;
    set: <T>(value: JSONCompatible<T>) => Promise<void>;
    onChange: (callback: (value: JSONValue) => void) => void;
};
export {};
