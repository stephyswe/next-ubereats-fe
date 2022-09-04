import { ComponentMeta, ComponentStory } from '@storybook/react';

import { breadCrumbGenerateCity, titleCaseFull } from '@/lib/helper';

import { componentParameter, mobileParameter } from '@/constant/storybook';
import CityPage from '@/pages/client/city/[label]/index.page';

export default {
  title: 'Route/Client/City',
  component: CityPage,
  parameters: componentParameter('fullscreen'),
} as ComponentMeta<typeof CityPage>;

const Template: ComponentStory<typeof CityPage> = () => (
  <CityPage
    cityInfo={[]}
    title={titleCaseFull('Food', 'Göteborg')}
    breadcrumb={breadCrumbGenerateCity('västra-götaland-göteborg')}
  />
);

export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
