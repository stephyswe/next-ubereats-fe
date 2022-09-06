import clsx from 'clsx';

type ContainerProps = {
  flex?: boolean;
  className?: string;
  wide?: boolean;
  children: React.ReactNode;
};

export const Container = ({
  flex,
  children,
  wide,
  className = '',
}: ContainerProps) => (
  <div
    data-testid='ui-container'
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
