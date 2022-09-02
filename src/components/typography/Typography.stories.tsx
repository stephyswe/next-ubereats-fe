import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Typography from './';

export default {
  title: 'Component/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ children }) => (
  <div className='flex flex-col'>
    <Typography variant='5xl'>{children || 'Heading 5xl'}</Typography>
    <Typography variant='4xl'>{children || 'Heading 4xl'}</Typography>
    <Typography variant='3xl'>{children || 'Heading 3xl'}</Typography>
    <Typography variant='xl'>{children || 'Heading xl'}</Typography>
    <Typography variant='large'>{children || 'Heading large'}</Typography>
    <Typography variant='base'>{children || 'Heading base'}</Typography>
    <Typography variant='small'>{children || 'Heading small'}</Typography>
    <Typography variant='xs'>{children || 'Heading xs'}</Typography>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: '',
};
