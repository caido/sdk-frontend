export type Menu = {
  registerItem: (item: MenuItem) => void;
};

type MenuItem = RequestRowMenuItem | SettingsMenuItem;

type RequestRowMenuItem = {
  type: "RequestRow";
  commandId: string;
  leadingIcon?: string;
};

type SettingsMenuItem = {
  type: "Settings";
  label: string;
  path: string;
  leadingIcon?: string;
};
