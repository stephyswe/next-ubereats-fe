import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  PickupFilterButton,
  PickupFilterSkeleton,
} from '@/pages/client/dining/pickup/components/filter';

import { pickupData } from '@/pages/client/dining/pickup/pickup.data';
import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';
import { useDelivery } from '@/contexts';

import { PickupFilter } from '.';

export default {
  title: 'UI/PickupFilter',
  component: PickupFilter,
  parameters: componentParameter(),
} as ComponentMeta<typeof PickupFilter>;

const TemplateAll: ComponentStory<typeof PickupFilter> = () => {
  const { setComplete } = useDelivery();
  setTimeout(() => setComplete(true), 1);

  return (
    <StoryContainer>
      <StoryList className='md:grid-cols-2'>
        <Story title='default'>
          <PickupFilter data={pickupData.filters} />
        </Story>
        <Story title='no data'>
          <PickupFilter data={[]} />
        </Story>
      </StoryList>
      <StoryList className='md:grid-cols-2'>
        <Story title='default'>
          <PickupFilterButton title={pickupData.filters[0].title} />
        </Story>
        <Story title='no data'>
          <PickupFilterButton title='' />
        </Story>
        <Story title='loading'>
          <PickupFilterSkeleton />
        </Story>
      </StoryList>
    </StoryContainer>
  );
};

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
