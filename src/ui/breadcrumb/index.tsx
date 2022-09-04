import { Fragment } from 'react';

import { Link } from '@/components';

import { SpacerItem } from '@/ui/spacer';

import { SvgBreadCrumb } from '../icons';

export type BreadcrumbItemProps = {
  title: string;
  link: string;
};

export const Breadcrumb = ({ data }: { data: BreadcrumbItemProps[] }) => (
  <ol
    data-testid='ui-breadcrumb'
    aria-label='ui-label-breadcrumb'
    className='m-[0px_0px_16px] flex items-center overflow-auto whitespace-nowrap p-0 text-[#afafaf]'
  >
    {data.map(({ title, link }: BreadcrumbItemProps, index: number) => (
      <Fragment key={index}>
        <BreadcrumbItem key={title} title={title} link={link} />
        <SpacerItem length={data.length} index={index}>
          <div className='w-1 md:w-2' />
          <SvgBreadCrumb />
          <div className='w-1 md:w-2' />
        </SpacerItem>
      </Fragment>
    ))}
  </ol>
);

export const BreadcrumbItem = ({ title, link }: BreadcrumbItemProps) => (
  <li className='inline text-sm font-medium leading-4 last-of-type:text-[#000]'>
    <Link aria-label='ui-bc-link' href={link}>
      {title}
    </Link>
  </li>
);
