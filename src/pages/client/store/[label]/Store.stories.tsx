import { ComponentMeta, ComponentStory } from '@storybook/react';

import { componentParameter, mobileParameter } from '@/constant/storybook';
import StorePage from '@/pages/client/store/[label]/index.page';

export default {
  title: 'Route/Client/Store',
  component: StorePage,
  parameters: componentParameter('fullscreen'),
} as ComponentMeta<typeof StorePage>;

const Template: ComponentStory<typeof StorePage> = () => <StorePage />;

export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
