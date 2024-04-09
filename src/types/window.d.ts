export type Window = {
  getActiveEditor: () => Editor | undefined;
};

type Editor = {
  getSelectedText: () => string;
  replaceSelectedText: (text: string) => void;
  isReadOnly: () => boolean;
};
