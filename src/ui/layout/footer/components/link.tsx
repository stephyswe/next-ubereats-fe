import { Fragment, ReactNode } from 'react';

import { Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgFooterLanguage } from '@/ui/icons/icons';

type FooterLinkListProps = {
  data: FooterLinkItemProps[];
  children?: ReactNode;
};

export type FooterLinkItemProps = { title: string; link: string };

export const FooterLinkList = ({ children, data }: FooterLinkListProps) => (
  <div className='flex flex-1 flex-col'>
    <ul>
      {data.map((item: FooterLinkItemProps) => (
        <li key={item.title}>
          <Link
            href={item.link}
            className='mb-4 flex font-uberMoveText text-base font-normal leading-6 text-black'
          >
            {item.title}
          </Link>
        </li>
      ))}
      {children}
    </ul>
  </div>
);

export const LinkLanguage = () => (
  <li>
    <a rel='nofollow' className='flex' href='/se/language'>
      <SvgFooterLanguage />
      <Spacer className='w-2' />
      Svenska
    </a>
  </li>
);

export type FooterBottomLinkItemProps = { title: string };

export const FooterBottomLinkList = ({
  data,
}: {
  data: FooterBottomLinkItemProps[];
}) => (
  <div className='flex flex-col md:flex-row'>
    {data.map((item: FooterBottomLinkItemProps, i: number) => (
      <Fragment key={item.title}>
        <Link
          href='www.uber.com/'
          className='mb-4 flex font-uberMoveText text-sm font-normal leading-5 text-black'
        >
          {item.title}
        </Link>
        <Spacer className='w-10' length={data.length} index={i} />
      </Fragment>
    ))}
  </div>
);
