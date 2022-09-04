import { Fragment } from 'react';

import { Link } from '@/components';

import { Spacer } from '@/ui';

export type FooterSocialItemProps = { title: string; svg: JSX.Element };

export const FooterSocial = ({ data }: { data: FooterSocialItemProps[] }) => (
  <div className='flex flex-none flex-row text-black'>
    <div className='flex'>
      {data.map(({ title, svg }: FooterSocialItemProps, index: number) => (
        <Fragment key={title}>
          <Link href='placeholder'>
            <span className='absolute -m-[1px] h-[1px] w-[1px] overflow-hidden'>
              {title}
            </span>
            {svg}
          </Link>
          <Spacer className='w-6' length={data.length} index={index} />
        </Fragment>
      ))}
    </div>
  </div>
);
