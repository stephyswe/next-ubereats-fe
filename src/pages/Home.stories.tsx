import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useDelivery } from '@/contexts';
import HomePage from '@/pages/index.page';

export default {
  title: 'Route/Home',
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      //defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => {
  const { setComplete } = useDelivery();

  setTimeout(() => {
    setComplete(true);
  }, 1000);

  return <HomePage />;
};

const Template2: ComponentStory<typeof HomePage> = () => {
  const { setComplete } = useDelivery();
  setTimeout(() => {
    setComplete(true);
  }, 1000);

  return <HomePage />;
};

export const Default = Template.bind({});
export const Mobile = Template2.bind({});

Mobile.parameters = {
  viewport: {
    chromatic: { viewports: [375] },
    defaultViewport: 'iphonex',
  },
};
