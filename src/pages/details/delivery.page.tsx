/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import React from 'react';

import { Typography } from '@/components';
import { CloseButton } from '@/components/buttons/NavButton';
import { ButtonInputDeliver } from '@/components/inputs/ButtonInput';

export default function DetailsDelivery() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <div className='px-5 pt-[70px]'>
      <CloseButton onClick={onClick} />
      <Typography className='mb-8 text-[25px] font-semibold leading-3'>
        Deliver to
      </Typography>
      <ButtonInputDeliver
        placeholder='Enter delivery address'
        className='bg-[#eee]'
        innerClassName='bg-[#eee]'
      />
    </div>
  );
}
