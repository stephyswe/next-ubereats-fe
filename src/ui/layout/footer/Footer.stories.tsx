import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Footer as FooterComp } from '.';

export default {
  title: 'Layout/Footer',
  component: FooterComp,
  parameters: {
    viewport: {
      layout: 'fullscreen',
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      //defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof FooterComp>;

const Template: ComponentStory<typeof FooterComp> = () => {
  return <FooterComp />;
};

const Template2: ComponentStory<typeof FooterComp> = () => {
  return <FooterComp />;
};

export const Default = Template.bind({});
export const Mobile = Template2.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
