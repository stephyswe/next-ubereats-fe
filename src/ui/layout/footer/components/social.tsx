import { Fragment } from 'react';

import { Link } from '@/components';

import { Spacer } from '@/ui';

export type FooterSocialItemProps = { title: string; svg: JSX.Element };

export const FooterSocialList = ({
  data,
}: {
  data: FooterSocialItemProps[];
}) => (
  <div className='flex flex-none flex-row text-black'>
    <div className='flex'>
      {data.map((item: FooterSocialItemProps, i: number) => (
        <Fragment key={item.title}>
          <Link key={item.title} href='placeholder'>
            <span className='absolute -m-[1px] h-[1px] w-[1px] overflow-hidden'>
              {item.title}
            </span>
            {item.svg}
          </Link>
          <Spacer className='w-6' length={data.length} index={i} />
        </Fragment>
      ))}
    </div>
  </div>
);
