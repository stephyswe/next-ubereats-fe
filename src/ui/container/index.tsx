export function Container({ children, wide, className = '' }: any) {
  return (
    <div
      className={`m-auto box-border min-w-[1024px] max-w-[1920px] ${
        wide ? '' : 'px-10'
      } ${className && className}`}
    >
      {children}
    </div>
  );
}
