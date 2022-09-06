import { ComponentMeta, ComponentStory } from '@storybook/react';

import { cityData } from '@/constant/pages/client/city.data';
import { componentParameter, mobileParameter } from '@/constant/storybook';

import { HeroDynamic } from './index';

const defaultArgs = {
  title: 'Storybook Headline',
  background: cityData.hero.background,
};

export default {
  title: 'UI/Hero/Dynamic',
  component: HeroDynamic,
  parameters: componentParameter('fullscreen'),
} as ComponentMeta<typeof HeroDynamic>;

const Template: ComponentStory<typeof HeroDynamic> = (args) => (
  <>
    <div className='m-[0 auto] flex h-[80px] items-center justify-center text-gray-300'>
      header placeholder
    </div>
    <HeroDynamic {...args} />
  </>
);
export const Default = Template.bind({});
Default.args = defaultArgs;
export const Mobile = Template.bind({});
Mobile.args = defaultArgs;
Mobile.parameters = mobileParameter();
