import clsx from 'clsx';

export const Spacer = ({ length, index, className, ...rest }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return (
    <div
      className={clsx(
        'm-0 flex-shrink-0 p-0',
        className && className.charAt(0) !== 'h' ? 'h-[1px]' : '',
        className
      )}
      {...rest}
    />
  );
};

export const SpacerItem = ({ length, index, children }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return <>{children}</>;
};

type SpacerProps = {
  length?: number;
  index?: number;
} & React.ComponentPropsWithRef<'div'>;

type SeparatorProps = {
  topOnly?: boolean;
  mobileHidden?: boolean;
  mobileHiddenSpace?: boolean;
};

export const Separator = ({
  topOnly,
  mobileHidden,
  mobileHiddenSpace,
}: SeparatorProps) => {
  return (
    <hr
      className={clsx(
        'h-[1px] border-none bg-[#e2e2e2]',
        mobileHidden ? 'hidden md:block' : '',
        mobileHiddenSpace ? 'sm:my-4 sm:bg-[transparent]' : '',
        topOnly ? 'm-[32px_0_0]' : 'my-8'
      )}
    />
  );
};
