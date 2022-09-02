import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NextImage } from './';

export default {
  title: 'Component/Image',
  component: NextImage,
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = () => (
  <div className=''>
    <NextImage
      alt='something'
      src='/images/Star_Black_Eats_3.png'
      width='14'
      height='14'
    />
  </div>
);

export const Default = Template.bind({});
