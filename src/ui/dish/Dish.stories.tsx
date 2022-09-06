/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';
import { dishData } from '@/pages/client/store/[label]/data';

import {
  DishItem,
  DishItemDetail,
  DishItemImage,
  DishItemPlusQuick,
  DishList,
} from '.';

export default {
  title: 'UI/Dish',
  component: DishList,
  parameters: componentParameter(),
} as ComponentMeta<typeof DishList>;

const TemplateAll: ComponentStory<typeof DishList> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='default'>
        <DishList groupKey='Pizza' data={dishData.Sallader} />
      </Story>
    </StoryList>
    <StoryList className='md:grid-cols-3'>
      <Story title='default'>
        <DishItem groupKey='Pizza' data={dishData.Sallader[0]} />
      </Story>
      <Story title='default'>
        <DishItem groupKey='Pizza' data={dishData.Sallader[1]} />
      </Story>
      <Story title='default'>
        <DishItem groupKey='Pizza' data={dishData.Sallader[0]} />
      </Story>
    </StoryList>
    <StoryList title='Partials' className='md:grid-cols-3'>
      <Story title='detail'>
        <DishItemDetail {...dishData.Sallader[0]} onClick={() => {}} />
      </Story>
      <Story title='detail custom'>
        <DishItemDetail name='Custom Name' price={100} onClick={() => {}} />
      </Story>
      <Story title='detail'>
        <DishItemImage {...dishData.Sallader[1]} onClick={() => {}} />
      </Story>
      <Story title='detail'>
        <DishItemPlusQuick {...dishData.Sallader[0]} />
      </Story>
    </StoryList>
  </StoryContainer>
);

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
