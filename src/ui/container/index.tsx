import clsx from 'clsx';

export function Container({ flex, children, wide, className = '' }: any) {
  return (
    <div
      className={clsx(
        `m-[0_auto] box-border max-w-[1920px] md:min-w-[1024px]`,
        wide ? '' : 'p-[0_16px] md:p-[0_40px]',
        flex ? 'flex justify-between' : '',
        className && className
      )}
    >
      {children}
    </div>
  );
}
