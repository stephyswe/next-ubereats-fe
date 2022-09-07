import Modal from 'react-modal';

import { Typography } from '@/components';

import { isBrowser, isTest } from '@/constant/env';
import { Spacer } from '@/ui';

import { DishItem } from './item';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
if (isBrowser) {
  if (!isTest && document.querySelector('#root')) {
    Modal.setAppElement('#root');
  } else if (!isTest) {
    Modal.setAppElement('#__next');
  }
}

type StoreListProps = {
  groupKey: string;
  data: any;
};

export const DishList = ({ groupKey, data }: StoreListProps) => (
  <li className='mt-10 block first-of-type:mt-0'>
    <Typography as='div' variant='2xl' id={groupKey}>
      {groupKey}
    </Typography>
    <Spacer className='h-[16px]' />
    <Spacer className='md:h-[24px]' />
    <ul className='grid grid-cols-2 gap-y-[40px] gap-x-[24px] md:grid-cols-2 xl:grid-cols-4'>
      {data.map((item: any) => {
        let itemType = 'default';
        if (groupKey === 'Pizza') itemType = 'horz';
        return <DishItem itemType={itemType} key={item.id} data={item} />;
      })}
    </ul>
  </li>
);
