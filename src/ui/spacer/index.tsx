import clsx from 'clsx';

export const Spacer = ({ length, index, className, ...rest }: SpacerProps) => {
  if (index && length === index + 1) return null;
  return (
    <div
      data-testid='ui-spacer'
      className={clsx(
        'm-0 flex-shrink-0',
        className && className.charAt(0) !== 'h' ? 'h-[1px]' : '',
        className
      )}
      {...rest}
    />
  );
};

export const SpacerItem = ({ length, index, children }: SpacerItemProps) => {
  if ((length && index) || length === 1) if (length === index + 1) return null;
  return <>{children}</>;
};

type SpacerProps = {
  length?: number;
  index?: number;
  children?: never;
  className?: string;
};

type SpacerItemProps = {
  length: number;
  index: number;
  children: React.ReactNode;
};

type SeparatorProps = {
  top?: boolean;
  mobile?: boolean;
  mobileSpace?: boolean;
};

export const Separator = ({ top, mobile, mobileSpace }: SeparatorProps) => (
  <hr
    data-testid='ui-separator'
    className={clsx(
      'h-[1px] border-none bg-[#e2e2e2]',
      mobile ? 'hidden md:block' : 'block',
      mobileSpace ? 'sm:my-4 sm:bg-[transparent]' : '',
      top ? 'm-[32px_0_0]' : 'm-[32px_0]'
    )}
  />
);
