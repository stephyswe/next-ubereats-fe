import { ComponentMeta, ComponentStory } from '@storybook/react';

import { componentParameter, mobileParameter } from '@/constant/storybook';

import PickUpModePage from './index.page';

export default {
  title: 'Route/Client/Dining/Pickup',
  component: PickUpModePage,
  parameters: componentParameter('fullscreen'),
} as ComponentMeta<typeof PickUpModePage>;

const Template: ComponentStory<typeof PickUpModePage> = () => (
  <PickUpModePage />
);

export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
