import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Breadcrumb } from '.';

export default {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb
      data={[
        {
          title: 'Country',
          link: '/',
        },
        {
          title: 'Region',
          link: '/region',
        },
        {
          title: 'City',
          link: '/city',
        },
      ]}
    />
  );
};

export const Default = Template.bind({});
