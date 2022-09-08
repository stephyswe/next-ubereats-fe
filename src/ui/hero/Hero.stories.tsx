import { ComponentMeta, ComponentStory } from '@storybook/react';

import { componentParameter, mobileParameter } from '@/lib/storybook';

import { HomeData } from '@/pages/_app/home.data';

import { Hero } from './index';

const defaultArgs = {
  title: 'Storybook Headline',
  background: HomeData.hero.background,
};

export default {
  title: 'UI/Hero/Default',
  component: Hero,
  parameters: componentParameter('fullscreen'),
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;
export const Default = Template.bind({});
Default.args = defaultArgs;
export const Mobile = Template.bind({});
Mobile.args = defaultArgs;
Mobile.parameters = mobileParameter();
