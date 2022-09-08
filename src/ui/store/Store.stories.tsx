import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';

import { storeData, storeTitleData } from '@/pages/_app/items/store';
import { pickupData } from '@/pages/client/dining/pickup/pickup.data';
import { storePageData } from '@/pages/client/store/[label]/store.data';
import { StoreItemDefault, StoreItemWide } from '@/ui/store/item';

import { StoreDetail, StoresClosed, StoreScroll, StoresOpen } from '.';

const customData = {
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
      <Story title='With data'>
        <StoresClosed />
      </Story>
      <Story title='With no data'>
        <StoresOpen />
      </Story>
      <Story title='With headline & data'>
        <StoreScroll data={storeTitleData[0]} />
      </Story>
    </StoryList>

    <StoryList className='md:grid-cols-3'>
      <Story title='default'>
        <StoreItemDefault {...pickupData} />
      </Story>
      <Story title='wide'>
        <StoreItemWide
          {...storeData}
          banner='SEK 0 Delivery Fee (Spend SEK 250)'
        />
      </Story>
      <Story title='ranking'>
        <StoreItemDefault {...storeData} ranking='4.0' />
      </Story>
      <Story title='Closed'>
        <StoreItemDefault {...storeData} closed />
      </Story>
      <Story title='Long text'>
        <StoreItemDefault {...customData} />
      </Story>
    </StoryList>
    <StoryList className='md:grid-cols-2'>
      <Story title='detail'>
        <StoreDetail data={storePageData.detail} />
      </Story>
      <Story title='detail'>
        <StoreDetail data={storePageData.detail} />
      </Story>
    </StoryList>
  </StoryContainer>
);
export const Desktop = TemplateAll.bind({});
Desktop.parameters = { layout: 'fullscreen' };
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
