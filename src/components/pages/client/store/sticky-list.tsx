/* eslint-disable unused-imports/no-unused-vars */

import { Button, Link } from '@/components/';

import { Spacer } from '@/ui';

type StickyItemProps = { title: string };

export const StickyList = ({ menu }: { menu: string[] }) => (
  <div className='sticky top-20 flex h-[300px] max-w-full flex-shrink-0 overflow-y-auto'>
    <div className='w-[306px] flex-1'>
      <Spacer className='h-[24px]' />
      <nav className='flex flex-1 flex-col'>
        {menu.map((item: string) => (
          <StickyItem key={item} title={item} />
        ))}
      </nav>
    </div>
  </div>
);

const StickyItem = ({ title }: StickyItemProps) => (
  <div className='flex items-center justify-between'>
    <Link href={`#${title}`}>
      <Button variant='btnBase2' size='base'>
        <div className='text-base font-medium leading-5'>{title}</div>
      </Button>
    </Link>
  </div>
);
