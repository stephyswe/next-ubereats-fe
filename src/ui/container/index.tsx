export function Container({ children, wide, className = '' }: any) {
  return (
    <div
      className={`m-auto box-border max-w-[1920px] md:min-w-[1024px] ${
        wide ? '' : 'px-4 md:px-10 '
      } ${className && className}`}
    >
      {children}
    </div>
  );
}
