import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';
import { categoriesData } from '@/pages/_app/items/category';

import { CategoryList, CategorySquareItem } from '.';

const defaultItemArgs = {
  id: 1,
  name: 'Fast Food',
  coverImg:
    'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/FastFood_CuisineCarousel@2x.png',
  slug: 'fast-food',
  countRestaurants: 1,
};

const customItemArgs = {
  id: 1,
  name: 'Custom Title',
  coverImg:
    'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/FastFood_CuisineCarousel@2x.png',
  slug: 'fast-food',
  countRestaurants: 1,
};

export default {
  title: 'UI/CategoryList',
  component: CategoryList,
  parameters: componentParameter(),
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='default' bgColor='bg-white'>
        <CategoryList data={categoriesData} />
      </Story>
    </StoryList>
    <StoryList>
      <Story title='square item' bgColor='bg-white'>
        <CategorySquareItem {...defaultItemArgs} />
      </Story>
      <Story title='custom item' bgColor='bg-white'>
        <CategorySquareItem {...customItemArgs} />
      </Story>
    </StoryList>
  </StoryContainer>
);
export const Desktop = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
