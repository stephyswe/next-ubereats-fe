import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';
import { categoriesData } from '@/constant/ui/category';

import { CategoryList, CategorySquareItem } from '.';

const defaultArgs = { data: categoriesData };

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

const Template: ComponentStory<typeof CategoryList> = (args) => (
  <StoryContainer>
    <StoryList>
      <Story title='default'>
        <CategoryList {...args} />
      </Story>
    </StoryList>
    <StoryList>
      <Story title='square item'>
        <CategorySquareItem {...defaultItemArgs} />
      </Story>
      <Story title='custom item'>
        <CategorySquareItem {...customItemArgs} />
      </Story>
    </StoryList>
  </StoryContainer>
);
export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = mobileParameter();
Default.args = defaultArgs;
Mobile.args = defaultArgs;
