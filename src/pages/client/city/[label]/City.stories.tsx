import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { breadCrumbGenerateCity, titleCaseFull } from '@/lib/helper';

import CityPage from '@/pages/client/city/[label]/index.page';

export default {
  title: 'Route/Client/City',
  component: CityPage,
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
} as ComponentMeta<typeof CityPage>;

const Template: ComponentStory<typeof CityPage> = () => {
  return (
    <CityPage
      cityInfo={[]}
      title={titleCaseFull('Food', 'Göteborg')}
      breadcrumb={breadCrumbGenerateCity('västra-götaland-göteborg')}
    />
  );
};

const Template2: ComponentStory<typeof CityPage> = () => {
  return (
    <CityPage
      cityInfo={[]}
      title={titleCaseFull('Food', 'Göteborg')}
      breadcrumb={breadCrumbGenerateCity('västra-götaland-göteborg')}
    />
  );
};

export const Default = Template.bind({});
export const Mobile = Template2.bind({});

Mobile.parameters = {
  // Set the viewports in Chromatic at a story level.
  chromatic: { viewports: [375, 812] },
  viewport: {
    defaultViewport: 'iphonex',
  },
};
