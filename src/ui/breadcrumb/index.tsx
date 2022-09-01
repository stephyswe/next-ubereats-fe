import { Fragment } from 'react';

import { Link } from '@/components';

import { SpacerItem } from '@/ui/spacer';

import { SvgBreadCrumb } from '../icons';

export type BreadCrumbItemProps = {
  title: string;
  link: string;
};

export const BreadCrumb = ({ data }: { data: BreadCrumbItemProps[] }) => (
  <ol
    data-testid='ui-breadcrumb'
    aria-label='ui-bc-list'
    className='m-[0px_0px_16px] flex items-center overflow-auto whitespace-nowrap p-0 text-[#afafaf]'
  >
    {data.map((item: BreadCrumbItemProps, index: number) => (
      <Fragment key={index}>
        <BreadCrumbItem key={item.title} title={item.title} link={item.link} />
        <SpacerItem length={data.length} index={index}>
          <div className='w-2' />
          <SvgBreadCrumb />
          <div className='w-2' />
        </SpacerItem>
      </Fragment>
    ))}
  </ol>
);

const BreadCrumbItem = ({ title, link }: BreadCrumbItemProps) => (
  <li className='inline text-sm font-medium leading-4 last-of-type:text-[#000]'>
    <Link aria-label='ui-bc-link' href={link}>
      {title}
    </Link>
  </li>
);
