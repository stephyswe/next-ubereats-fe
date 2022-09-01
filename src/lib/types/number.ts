export type IsPositive<N extends number> = `${N}` extends `-${string}`
  ? false
  : true;

export type PositiveNumber<
  N extends number,
  T extends number[] = []
> = T['length'] extends N ? T[number] : PositiveNumber<N, [...T, T['length']]>;
