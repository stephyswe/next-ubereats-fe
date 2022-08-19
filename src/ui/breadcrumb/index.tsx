import { Link } from '@/components';

import { SvgBreadCrumb } from '../icons';

export type BreadCrumbItemProps = {
  title: string;
  link: string;
  lastItem: boolean;
};

export const BreadCrumb = ({ data }: { data: BreadCrumbItemProps[] }) => (
  <ol className='m-[0_0_16px_0] flex items-center overflow-auto whitespace-nowrap p-0 text-[#afafaf]'>
    {data.map(
      (
        bcItem: BreadCrumbItemProps,
        index: number,
        { length }: { length: number }
      ) => (
        <BreadCrumbItem
          key={bcItem.title}
          title={bcItem.title}
          link={bcItem.link}
          lastItem={index + 1 === length}
        />
      )
    )}
  </ol>
);

const BreadCrumbItem = ({ title, link, lastItem }: BreadCrumbItemProps) => (
  <>
    <li className='inline text-sm font-medium leading-4 last-of-type:text-[#000]'>
      <Link href={link}>{title}</Link>
    </li>

    {!lastItem ? (
      <>
        <div className='w-2' />
        <SvgBreadCrumb />
        <div className='w-2' />
      </>
    ) : null}
  </>
);
