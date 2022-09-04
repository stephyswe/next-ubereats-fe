import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';
import { restaurantTitleData } from '@/constant/ui/restaurant';
import { CityRestaurantItem } from '@/ui/store/item';

import { CityRestaurantOne, StoreScroll } from '.';

const customDataItem = {
  slug: 'burger-king-jarntorget',
  name: 'Burger King Järntorget',
  coverImg:
    'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lMTIxZDlhMS01YzRiLTQ5OGEtYWM0MC1lMjZhMTlhZThhYjUuanBlZw==',
  category: ['Burgers', 'Fast Food'],
  address: 'Järntorget 6, Västra Götalands län 413 04',
  ranking: null,
  banner: null,
};

const customDataAllItem = {
  slug: 'custom-slug',
  name: 'customstorecustomstorecustomstore',
  coverImg:
    'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lMTIxZDlhMS01YzRiLTQ5OGEtYWM0MC1lMjZhMTlhZThhYjUuanBlZw==',
  category: ['category1', 'category2', 'cate gory3'],
  address: 'customaddresscustomddresscustomaddress',
  ranking: '4.0',
  banner: null,
};

export default {
  title: 'UI/Store',
  component: StoreScroll,
  parameters: componentParameter(),
} as ComponentMeta<typeof StoreScroll>;

const TemplateAll: ComponentStory<typeof StoreScroll> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='With headline & data'>
        <StoreScroll data={restaurantTitleData[0]} />
      </Story>
      <Story title='With data'>
        <CityRestaurantOne data={restaurantTitleData[0].items} />
      </Story>
      <Story title='With no data'>
        <CityRestaurantOne data={[]} />
      </Story>
    </StoryList>

    <StoryList className='md:grid-cols-3'>
      <Story title='default'>
        <CityRestaurantItem {...customDataItem} />
      </Story>
      <Story title='banner'>
        <CityRestaurantItem
          {...customDataItem}
          banner='SEK 0 Delivery Fee (Spend SEK 250)'
        />
      </Story>
      <Story title='ranking'>
        <CityRestaurantItem {...customDataItem} ranking='4.0' />
      </Story>
      <Story title='Closed'>
        <CityRestaurantItem {...customDataItem} closed />
      </Story>
      <Story title='Long text'>
        <CityRestaurantItem {...customDataAllItem} />
      </Story>
    </StoryList>
  </StoryContainer>
);
export const Desktop = TemplateAll.bind({});
Desktop.parameters = { layout: 'fullscreen' };
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
