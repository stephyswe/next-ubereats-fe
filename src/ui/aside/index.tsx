/* eslint-disable unused-imports/no-unused-vars */

import { Button, Link } from '@/components/';

import { Spacer } from '@/ui';

type StickyItemProps = { title: string };

export const AsideList = ({ data }: { data: any }) => (
  <div className='sticky top-0 hidden h-screen flex-shrink-0 overflow-y-auto md:flex'>
    <div className='w-[306px] flex-1'>
      <Spacer className='h-[24px]' />
      <nav className='flex flex-1 flex-col'>
        {Object.keys(data).map((key: string) => (
          <AsideItem key={key} title={key} />
        ))}
      </nav>
    </div>
  </div>
);

const AsideItem = ({ title }: StickyItemProps) => (
  <div className='flex items-center justify-between'>
    <Link href={`#${title}`}>
      <Button className='mb-6'>
        <div className='text-base font-medium leading-5'>{title}</div>
      </Button>
    </Link>
  </div>
);
