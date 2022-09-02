/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { UnstyledInput as Input } from './UnstyledInput';

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => (
  <div className='flex max-w-[200px] flex-col gap-5'>
    <Input
      variant='input1'
      name='email'
      type='email'
      placeholder='Email'
      register={() => {}}
    />
    <Input
      variant='input2'
      name='email'
      type='email'
      placeholder='Email'
      register={() => {}}
    />
    <Input
      variant='input3'
      type='text'
      role='combobox'
      name='searchTerm'
      placeholder='placeholder'
      register={() => {}}
    />
  </div>
);

export const Default = Template.bind({});
