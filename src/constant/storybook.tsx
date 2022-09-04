import clsx from 'clsx';

import clsxm from '@/lib/clsxm';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

export const componentParameter = (layout?: string) => {
  return { layout: layout ?? 'padded' };
};

export const mobileParameter = (layout?: string) => {
  return {
    layout: layout ?? null,
    viewport: {
      chromatic: { viewports: [414] },
      defaultViewport: 'mobile2',
    },
  };
};

export const StoryContainer = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useWindowSizeJs();

  return (
    <div
      className={clsx(
        'story-container p-5 md:bg-[#f4f5f5]',
        isMobile ? 'p-0' : 'p-5'
      )}
    >
      <h3 className='mb-3 py-2 text-center md:p-0'>
        {isMobile ? 'Mobile' : 'Desktop'} View
      </h3>
      <StoryContainerBox>{children}</StoryContainerBox>
    </div>
  );
};

const StoryContainerBox = ({ children }: any) => (
  <div className='space-y-5 border-[1px] border-[rgba(36,41,46,0.12)] bg-white md:border-solid md:p-2'>
    {children}
  </div>
);

export const Story = ({
  title,
  children,
  bold,
  bgColor,
  className,
}: {
  title: string;
  children: React.ReactNode;
  bold?: boolean;
  bgColor?: string;
  className?: string;
}) => (
  <div className='min-h-[20px]'>
    <p className={clsx('mb-2', bold ? 'font-medium' : '', 'ml-2')}>{title}</p>
    <div
      className={clsxm(
        'border-[1px] border-solid border-[rgba(36,41,46,0.12)]',
        bgColor ? bgColor : 'bg-[rgb(244,245,245)]',
        className
      )}
    >
      {children}
    </div>
  </div>
);

export const StoryList = ({
  children,
  className,
  title,
}: {
  title?: string;
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}) => (
  <div>
    {title ? <p className='mb-3'>{title}</p> : null}
    <div
      className={clsxm(
        'grid grid-cols-1 md:gap-4',
        'bg-white',
        'sm:space-y-5',
        className,
        'grid-cols-1 border-[1px] border-[rgba(36,41,46,0.12)] sm:p-2 md:px-2'
      )}
    >
      {children}
    </div>
  </div>
);
