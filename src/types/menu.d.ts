export type Menu = {
    registerItem: (item: MenuItem) => void;
};
type MenuItem = RequestRowMenuItem | SettingsMenuItem | RequestMenuItem | ResponseMenuItem;
type RequestRowMenuItem = {
    type: "RequestRow";
    commandId: string;
    leadingIcon?: string;
};
type RequestMenuItem = {
    type: "Request";
    commandId: string;
    leadingIcon?: string;
};
type ResponseMenuItem = {
    type: "Response";
    commandId: string;
    leadingIcon?: string;
};
type SettingsMenuItem = {
    type: "Settings";
    label: string;
    path: string;
    leadingIcon?: string;
};
export {};
