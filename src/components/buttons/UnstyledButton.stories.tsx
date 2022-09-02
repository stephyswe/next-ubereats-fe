import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';

import { UnStyledButton } from './UnStyledButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: UnStyledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof UnStyledButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <UnStyledButton {...args} />
);

export const BtnBase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BtnBase.args = {
  label: 'Button',
  variant: 'btnBase',
};

export const BtnCart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BtnCart.args = {
  label: 'Button',
  variant: 'btnCart',
};

export const BtnDish = Template.bind({});
BtnDish.args = {
  label: 'Button',
  variant: 'btnDish',
};

export const BtnLg1 = Template.bind({});
BtnLg1.args = {
  label: 'Button',
  variant: 'btnLg1',
};

export const BtnLg2 = Template.bind({});
BtnLg2.args = {
  label: 'Button',
  variant: 'btnLg2',
};

export const BtnLg3 = Template.bind({});
BtnLg3.args = {
  label: 'Button',
  variant: 'btnLg3',
};

export const BtnNav = Template.bind({});
BtnNav.args = {
  label: 'Button',
  variant: 'btnNav',
};

export const BtnSmall1 = Template.bind({});
BtnSmall1.args = {
  label: 'Button',
  variant: 'btnSmall1',
};

export const BtnSmall2 = Template.bind({});
BtnSmall2.args = {
  label: 'Button',
  variant: 'btnSmall2',
};
