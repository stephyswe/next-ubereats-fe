import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { UnstyledLink as Link } from './UnstyledLink';

export default {
  title: 'Component/Input',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <div className='flex max-w-[200px] flex-col gap-5'>
    <Link
      label='test'
      size='small'
      variant='linkLarge'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
    <Link
      label='test'
      size='small'
      variant='linkBase1'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
    <Link
      label='test'
      size='small'
      variant='linkBase2'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
    <Link
      label='test'
      size='small'
      variant='linkSmall1'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
    <Link
      label='test'
      size='small'
      variant='linkSmall2'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
    <Link
      label='test'
      size='small'
      variant='linkSmall3'
      className='bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
      {...args}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: '',
  href: 'placeholder',
};
