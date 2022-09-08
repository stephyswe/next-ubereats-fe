import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DiningCategoryItem } from '@/pages/client/dining/item';

import { pickupData } from '@/pages/client/dining/pickup/pickup.data';
import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';
import { useDelivery } from '@/contexts';

import { CategoryContentSkeleton, PickupArrow, PickupCategoryList } from '.';

export default {
  title: 'UI/PickupCategoryList',
  component: PickupCategoryList,
  parameters: componentParameter(),
} as ComponentMeta<typeof PickupCategoryList>;

const TemplateAll: ComponentStory<typeof PickupCategoryList> = () => {
  const { setComplete } = useDelivery();
  setTimeout(() => setComplete(true), 1);

  return (
    <StoryContainer>
      <StoryList className='md:grid-cols-1'>
        <Story title='default'>
          <PickupCategoryList data={pickupData.categories} />
        </Story>
        <Story title='no data'>
          <PickupCategoryList data={[]} />
        </Story>{' '}
      </StoryList>
      <StoryList className='md:grid-cols-1'>
        <Story title='item'>
          <DiningCategoryItem {...pickupData.categories[0]} />
        </Story>
        <Story title='arrow'>
          <PickupArrow />
        </Story>
        <Story title='loading'>
          <CategoryContentSkeleton />
        </Story>
      </StoryList>
    </StoryContainer>
  );
};

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
