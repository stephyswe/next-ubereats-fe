import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mobileParameter } from '@/constant/storybook';
import { useDelivery } from '@/contexts';
import HomePage from '@/pages/index.page';

export default {
  title: 'Route/Home',
  component: HomePage,
  parameters: { viewport: { layout: 'fullscreen' } },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => {
  const { setComplete } = useDelivery();
  setTimeout(() => setComplete(true), 1000);
  return <HomePage />;
};
export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
