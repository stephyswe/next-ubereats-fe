import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

import { Link } from '@/components';

import { Spacer } from '@/ui';

type SidebarAuthenticationProps = {
  data: SidebarAuthItemProps[];
  children: ReactNode;
};

type SidebarAuthItemProps = { title: string; link: string };

export const SidebarAuthentication = ({
  data,
  children,
}: SidebarAuthenticationProps) => (
  <div>
    {data.map(({ title, link }: SidebarAuthItemProps, index: number) => (
      <Fragment key={index}>
        <Link
          href={link}
          variant='linkLarge'
          weight='medium'
          className={clsx(
            index === 0
              ? 'bg-[#000] text-white hover:bg-[#333]'
              : 'bg-[#eee] text-black hover:bg-[#e2e2e2]'
          )}
        >
          {title}
        </Link>
        <Spacer className='h-2' />
      </Fragment>
    ))}
    {children}
  </div>
);
