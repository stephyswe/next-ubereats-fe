// index.tsx
export type LoadingStarterRowProps = { num: number; children: React.ReactNode };
export type LoadingHomeProps = { h: string; num: number };
export type LoadingWithSpaceProps = { p: string; children: React.ReactNode };
export type LoadingRowStarterProps = { children: React.ReactNode };

//item.tsx
export type LoadingInitProps = LoadingRowStarterProps &
  LoadingInitWidthHeightProps;

export type LoadingCircleProps = { area: string };
export type LoadingRoundSmallProps = { w: string };

// Either Formula
type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

type Either<T, U> = Only<T, U> | Only<U, T>;

type PropsWithHeight = { h: string | undefined };
type LPropsWithWidth = { w: string | undefined };

type PropsWidth = {
  w: string;
};
type PropsHeight = {
  h: string;
};

export type PropsLoadingWidthAndHeight = PropsWidth | PropsHeight;
export type PropsLoadingWidthAndHeightBoth =
  | PropsWidth
  | PropsHeight
  | (PropsWidth & PropsHeight);

export type LoadingInitWidthHeightProps = { w: string; h: string };

export type LoadingItemSquareProps = Either<PropsWithHeight, LPropsWithWidth>;

type PropsWithHSpace = { hSpace: string };
type LPropsWithWSpace = { wSpace: string };
export type LoadingHiddenSpaceProps = Either<PropsWithHSpace, LPropsWithWSpace>;
