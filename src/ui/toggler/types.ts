export type DiningToggleItemProps = {
  title: string;
  onClick: () => void;
  path: string | undefined;
};

export type DiningTogglerProps = { size: string };

export type ToggleItemProps = Omit<DiningToggleItemProps, 'path'>;

export type TogglerProps = { data: string[] };
