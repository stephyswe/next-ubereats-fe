import Image from 'next/image';
import { Fragment } from 'react';

import { Link } from '@/components';

import { Spacer } from '@/ui';

type SidebarSocialListProps = {
  data: {
    devices: SidebarSocialItemProps[];
    icon: string;
    title: string;
  };
};

type SidebarSocialItemProps = { svg: JSX.Element; title: string };

export const SidebarSocialList = ({ data }: SidebarSocialListProps) => (
  <div>
    <div className='flex items-center justify-center'>
      <Image
        alt='Uber&nbsp;Eats'
        src={data.icon}
        className='h-12 w-12 flex-none rounded-[15%]'
        height='56'
        width='56'
      />
      <Spacer className='w-4' />
      <p className='font-uberMoveText text-base font-medium leading-5'>
        {data.title}
      </p>
    </div>
    <div className='mb-2 mt-4 flex items-center'>
      {data.devices.map((device: SidebarSocialItemProps, index: number) => (
        <Fragment key={index}>
          <Link variant='small2' href='placeholder'>
            {device.svg}
            <Spacer className='w-2' />
            {device.title}
          </Link>
          <Spacer className='w-2' index={index} length={data.devices.length} />
        </Fragment>
      ))}
    </div>
  </div>
);
