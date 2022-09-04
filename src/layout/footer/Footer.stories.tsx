import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { mobileParameter } from '@/constant/storybook';

import { Footer } from '.';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: { viewport: { layout: 'fullscreen' } },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;
export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
